import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <aside className="p-5 hidden md:block">
      <nav className="flex flex-col gap-5 p-3  bg-white">
        <li className="flex gap-3 p-3 w-full">
          <div>
            <Icon icon={"mdi:home"} />
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
