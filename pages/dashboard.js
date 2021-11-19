import { useState, useEffect, useContext } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import SidebarMobile from "../components/dashboard/SidebarMobile";
import SidebarDesktop from "../components/dashboard/SidebarDesktop";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardBody from "../components/dashboard/DashboardBody";

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

export default function Dashboard({ data, cookie }) {
  const { commissions, stats } = data;
  const { user, setUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navItem, setNavItem] = useState(0);
  navigation[navItem].current = true;

  useEffect(() => {
    const decoded = jwt_decode(cookie.split("=")[1]);
    setUser({
      userId: decoded.userId,
      email: decoded.email,
    });
  }, []);

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

export async function getServerSideProps({ req }) {
  const cookie = req?.headers.cookie;

  const config = {
    headers: {
      cookie: typeof cookie !== "undefined" ? cookie : "",
    },
  };
  try {
    const { data } = await axios.get(
      `${process.env.SERVER_URL}/api/commissions`,
      config
    );
    return {
      props: {
        data,
        cookie,
      },
    };
  } catch (e) {
    if (e.response.status === 401) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }
}
