const Navbar = () => {
  return (
    <nav className="bg-white flex justify-around items-center min-h-[8vh] p-5">
      <header className="flex items-center">
        <img src="img" alt="Logo Image" /> <p>Pet Central</p>
        <a href="#"></a>
        <p className="bg-sky-400 text-md font-bold uppercase p-2 px-1 rounded text-gray-100">Admin</p>
      </header>
      <ul className="flex gap-5 w-1/5">
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
    </nav>
  );
};

export { Navbar };
