const Sidebar = () => {
  return (
    <aside className="p-5 w-1/3 ">
      <nav className="flex flex-col gap-5 p-3  bg-white">
        <li className="flex gap-3 p-3 w-full">
          <div>
            <i>🏠</i>
            <p>1</p>
          </div>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>2</p>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>3</p>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>4</p>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>5</p>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>6</p>
          <div className="dropdown">▽</div>
        </li>
        <li className="flex gap-3 p-3 w-full">
          <i>🏠</i>
          <p>7</p>
          <div className="dropdown">▽</div>
        </li>
      </nav>
    </aside>
  );
};

export { Sidebar };
