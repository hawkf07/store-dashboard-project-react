import { Icon } from "@iconify/react";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import {
  SidebarDropdownContainerType,
  SidebarNavItem as SidebarItem,
} from "../types";
const SidebarDropdownItem: FC<{ name: string }> = ({ name }) => (
  <li>
    {" "}
    <a href="#" className="visited:text-blue-500">
      {" "}
      {name}
    </a>
  </li>
);
const SidebarDropdownContainer: FC<SidebarDropdownContainerType> = ({
  children,
}) => <div className="p-3 flex items-center justify-center">{children}</div>;

const SidebarNavItem: FC<SidebarItem> = ({ icon, title, children }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  useEffect(() => {
    console.log("hello from dropdown");
  }, [dropdownIsOpen]);
  return (
    <div
      className={clsx("cursor-pointer border-blue-500 border-l-4 rounded-sm")}
      onClick={() => setDropdownIsOpen((prevState) => !prevState)}
    >
      <li className="w-full flex p-3 gap-3 cursor-pointer justify-between items-center">
        <div className="flex gap-3 items-center">
          <Icon icon={icon} className="text-2xl" />
          <p>{title}</p>
        </div>
        <div className="flex flex-col">
          <label tabIndex={0}>
            {dropdownIsOpen ? (
              <Icon icon={"mdi:arrow-up"} />
            ) : (
              <Icon icon={"mdi:arrow-down"} />
            )}
          </label>
        </div>
      </li>
      {dropdownIsOpen ? children : null}
    </div>
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
        <SidebarNavItem title="Reservation" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>
        <SidebarNavItem title="Service" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>
        <SidebarNavItem title="Store" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>
        <SidebarNavItem title="Report" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>

        <SidebarNavItem title="Customer" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>
        <SidebarNavItem title="Chat" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Reservation" />
          </SidebarDropdownContainer>
        </SidebarNavItem>
      </nav>
    </aside>
  );
};

export { Sidebar };
