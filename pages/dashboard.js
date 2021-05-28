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

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
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

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <SidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigation={navigation}
      />

      <SidebarDesktop navigation={navigation} />

      <div className="flex flex-col flex-1 w-0 bg-indigo-50 overflow-hidden">
        <DashboardHeader
          userNavigation={userNavigation}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <DashboardBody />
        </main>
      </div>
    </div>
  );
}
