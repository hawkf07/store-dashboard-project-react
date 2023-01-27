import {Icon} from '@iconify/react'
const Navbar = () => {
  return (
    <nav className="bg-white flex justify-around items-center min-h-[8vh] p-5">
      <header className="flex items-center gap-3">
        <Icon icon={"mdi:paw"} fontSize="2em"  className='text-sky-400'/>
        <a href="#" className='hidden md:block text-sky-400'>Pet Central</a>
        <p className="bg-sky-400 text-md font-bold uppercase p-2 px-1 rounded text-gray-100">Admin</p>
      </header>
      <ul className="md:flex gap-5 w-1/5 hidden">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </ul>
      <div className="block md:hidden">
        <Icon icon={"fa:bars"} className="text-gray-600"/>
      </div>
    </nav>
  );
};

export { Navbar };
