import { useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import SidebarMobile from "../components/SidebarMobile";
import SidebarDesktop from "../components/SidebarDesktop";
import DashboardHeader from "../components/DashboardHeader";
import DashboardBody from "../components/DashboardBody";
import dbConnect, { jsonify } from "../middleware/mongodb";
import Commissions from "../models/commissions";
import moment from "moment";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Dashboard({ commissions }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navItem, setNavItem] = useState(0);
  navigation[navItem].current = true;
  console.log(commissions);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <SidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
      />

      <SidebarDesktop navigation={navigation} setNavItem={setNavItem} />

      <div className="flex flex-col flex-1 w-0 overflow-hidden bg-indigo-50">
        <DashboardHeader
          userNavigation={userNavigation}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <DashboardBody data={commissions} />
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const dbRes = await Commissions.find();

  const data = dbRes.map((commissionObj) => {
    const resultsArray = [];
    const month = moment(commissionObj.date).format("MMM");
    resultsArray.push(month);
    let sum = 0;
    commissionObj.results.forEach((result) => {
      resultsArray.push(Number(result.value));
      sum += Number(result.value);
    });
    resultsArray.push(sum);
    return resultsArray;
  });

  if (!dbRes) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      commissions: jsonify(data),
    },
  };
}
