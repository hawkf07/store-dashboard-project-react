import { Icon } from "@iconify/react";
import { FC } from "react";
import { SidebarNavItem as SidebarItem } from "../types";

const SidebarNavItem: FC<SidebarItem> = ({ icon, title }) => {
  return (
    <li className="w-full flex p-3 gap-3 justify-between items-center">
      <div className="flex gap-3 items-center">
        <Icon icon={icon} className="text-2xl" />
        <p>{title}</p>
      </div>
      <Icon icon={"mdi:arrow-down"} />
    </li>
  );
};
const Sidebar = () => {
  return (
    <aside className="p-5 hidden md:block h-screen">
      <nav className="flex flex-col gap-5 p-3  bg-white w-full h-full">
        <li className="flex w-full gap-3 p-3 items-center ">
          <Icon icon={"mdi:home"} />
          <p>Dashboard</p>
        </li>
        <SidebarNavItem title="Reservation" icon="mdi:home" />
        <SidebarNavItem title="Service" icon="mdi:home" />
        <SidebarNavItem title="Store" icon="mdi:home" />
        <SidebarNavItem title="Report" icon="mdi:home" />
        <SidebarNavItem title="Customer" icon="mdi:home" />
        <SidebarNavItem title="Chat" icon="mdi:home" />
      </nav>
    </aside>
  );
};

export { Sidebar };
