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

export default function Dashboard({ commissions, stats }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navItem, setNavItem] = useState(0);
  navigation[navItem].current = true;
  console.log(stats);

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
          <DashboardBody data={commissions} stats={stats} />
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const dbRes = await Commissions.find();
  const programNames = [];
  const stats = [];
  const data = dbRes.map((commissionObj, index) => {
    const resultsArray = [];
    const month = moment(commissionObj.date).format("MMM");
    resultsArray.push(month);
    let sum = 0;
    commissionObj.results.forEach((result) => {
      if (index === 0) programNames.push(result.program);
      resultsArray.push(Number(result.value));
      sum += Number(result.value);
    });
    resultsArray.push(sum);
    return resultsArray;
  });

  for (let i = 0; i < 4; i++) {
    let thisMonthValue = data[data.length - 1][i + 1];
    let lastMonthValue = data[data.length - 2][i + 1];
    let change = (100 * (thisMonthValue - lastMonthValue)) / lastMonthValue;
    let truncateChange = Math.round(change * 100) / 100;

    stats.push({
      name: programNames[i],
      stat: thisMonthValue,
      change: truncateChange,
      changeType: change > 0 ? "increase" : "decrease",
      lastMonht: lastMonthValue,
      thisYear: getThisYearsCommission(data, i),
    });
  }

  if (!dbRes) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      commissions: jsonify(data),
      stats: stats,
    },
  };
}

function getThisYearsCommission(data, programIndex) {
  const filteredData = data.filter(
    (item, index) => index >= data.length - new Date().getMonth()
  );
  let sum = 0;
  filteredData.forEach((value) => {
    sum += value[programIndex + 1];
  });
  return sum;
}
