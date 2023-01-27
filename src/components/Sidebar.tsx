import { Icon } from "@iconify/react";
import autoAnimate from "@formkit/auto-animate";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";
import {
  SidebarDropdownContainerType,
  SidebarNavItem as SidebarItem,
} from "../types";
const SidebarDropdownItem: FC<{ name: string }> = ({ name }) => {
  return (
    <li>
      {" "}
      <a href="#" className="hover:text-blue-500">
        {" "}
        {name}
      </a>
    </li>
  );
};
const SidebarDropdownContainer: FC<SidebarDropdownContainerType> = ({
  children,
}) => (
  <div className="p-3 flex flex-col items-center justify-center ">
    <ul className="w-full items-center  flex gap-3 flex-col">{children}</ul>
  </div>
);

const SidebarNavItem: FC<SidebarItem> = ({ icon, title, children }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <div
      className={clsx(
        "cursor-pointer rounded-sm",
        dropdownIsOpen ? "border-blue-500 border-l-4 " : null
      )}
      onClick={() => setDropdownIsOpen((prevState) => !prevState)}
    >
      <li className="w-full flex p-3 gap-3 cursor-pointer justify-between items-center">
        <div
          className={clsx(
            "flex gap-3 items-center",
            dropdownIsOpen ? "text-blue-500" : null
          )}
        >
          <Icon icon={icon} className="text-2xl" />
          <p>{title}</p>
        </div>
        <div className="flex flex-col">
          <label tabIndex={0}>
            {dropdownIsOpen ? (
              <Icon
                icon={"mdi:arrow-up"}
                className={clsx(dropdownIsOpen && "text-blue-400")}
              />
            ) : (
              <Icon icon={"mdi:arrow-down"} />
            )}
          </label>
        </div>
      </li>
      <div ref={parent}>{dropdownIsOpen ? children : null}</div>
    </div>
  );
};
const Sidebar = () => {
  return (
    <aside className="p-5 hidden md:block ">
      <nav className="flex flex-col gap-5 p-3  bg-white w-full h-full">
        <li className="flex w-full gap-3 p-3 items-center ">
          <Icon icon={"mdi:home"} className="text-2xl" />
          <p>Dashboard</p>
        </li>
        <SidebarNavItem title="Reservation" icon="mdi:home">
          <SidebarDropdownContainer>
            <SidebarDropdownItem name="Item 1" />
            <SidebarDropdownItem name="Item 2" />
            <SidebarDropdownItem name="Item 3" />
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
