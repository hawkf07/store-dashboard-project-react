import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav className="bg-white flex justify-around items-center min-h-[8vh] p-5">
      <header className="flex items-center gap-3">
        <Icon icon={"mdi:paw"} fontSize="2em" className="text-sky-400" />
        <a href="#" className="hidden md:block text-sky-400">
          Pet Central
        </a>
        <p className="bg-sky-400 text-md font-bold uppercase p-2 px-1 rounded text-gray-100">
          Admin
        </p>
      </header>
      <ul className="md:flex gap-5 w-1/5 hidden text-gray-800">
        <li className="flex relative items-center ">
          <Icon icon={"ic:outline-notifications"} className="text-3xl" />
          <span className="absolute rounded-xl py-0.5 text-xs px-0.5  top-1 right-0 text-gray-100 bg-red-500">
            01
          </span>
        </li>
        <li>
          <p className="">John Doe</p>
          <p className="text-gray-400 text-xs">Admin</p>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Logout
          </a>
        </li>
      </ul>
      <div className="block md:hidden">
        <Icon icon={"fa:bars"} className="text-gray-600" />
      </div>
    </nav>
  );
};

export { Navbar };
