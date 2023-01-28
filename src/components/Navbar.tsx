import autoAnimate from "@formkit/auto-animate";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { SidebarDropdownContainer, SidebarDropdownItem, SidebarNavItem } from './Sidebar'
const NavbarNav = () => {
  return (
    <>

      <ul className="md:flex gap-5 w-1/5 hidden text-gray-800 justify-around">
        <li className="flex relative items-center cursor-pointer">
          <Icon icon={"ic:outline-notifications"} className="text-3xl" />
          <span className="absolute rounded-xl py-0.5 text-xs px-0.5  top-1 right-0 text-gray-100 bg-red-500">
            01
          </span>
        </li>
        <li >
          <p className="">John Doe</p>
          <p className="text-gray-400 text-xs">Admin</p>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Logout
          </a>
        </li>
      </ul>
    </>
  )
}
const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [navbarDropdownIsOpen, setNavbarDropdownIsOpen] = useState(false)
  const navbarDropdownRef = useRef(null)
  const navbarDropdownHandler = () => {
    setNavbarDropdownIsOpen(!navbarDropdownIsOpen)
  }
  const sidebarRef = useRef(null)

  const sidebarHandler = () => {

    setDrawerIsOpen(!drawerIsOpen)
    console.log("sidebar is ", drawerIsOpen)
  }
  useEffect(() => {
    sidebarRef.current && autoAnimate(sidebarRef.current)
    navbarDropdownRef.current && autoAnimate(navbarDropdownRef.current)
    document.querySelector('main')?.classList.toggle("blur")
  }, [drawerIsOpen])
  return (
    <>
      <nav className="bg-white min-h-[8vh] p-5">
        <div>

          <div className="flex justify-between items-center">
            <div className="flex gap-5 justify-around">
              <button className="block md:hidden cursor-pointer" onClick={sidebarHandler}>
                <Icon icon={"fa:bars"} />
              </button>
              <header className="flex items-center gap-2">
                <Icon icon={"mdi:paw"} fontSize="2em" className="text-sky-400" />
                <a href="#" className="hidden md:block text-sky-400">
                  Pet Central
                </a>
                <p className="bg-sky-400 hidden md:block text-md font-bold uppercase p-2 px-1 rounded text-gray-100">
                  Admin
                </p>
              </header>
            </div>

            <div className="relative text-center w-32" ref={navbarDropdownRef}>
              <div onClick={navbarDropdownHandler} className="rounded-full w-8 mx-auto bg-gray-500 p-1 " id="avatar-navbar">
                <Icon icon={"mdi:user"} className="text-2xl text-white" />
              </div>
              {navbarDropdownIsOpen && <div className="absolute text-gray-700 z-20 mt-2 w-32 bg-gray-100 shadow-md left-0 p-1 rounded-md">
                <div>
                  <a href="#" className="">John Doe

                    <span className="text-gray-400 text-xs block">Admin</span>
                  </a>
                </div>
                <a href="#" className="text-blue-500 cursor-pointer">
                  Logout
                </a>
              </div>}



            </div>
            <NavbarNav />

          </div>
        </div>
      </nav>
      <div ref={sidebarRef}>

        {drawerIsOpen ?
          (

            <div id="drawer-sidebar" className="fixed w-48 left-0 top-[8vh] h-screen bg-white z-10" >
              <ul>

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

              </ul>
            </div>
          )
          : null
        }

      </div>


    </>
  );
};

export { Navbar, NavbarNav };
