import { Icon } from "@iconify/react";
const SearchInput = () => {
  return (
    <div className="mt-5 flex justify-end px-3">
      <div className="relative ">
        <span className="inset-y-0 pl-10 p-3 right-0 flex items-center absolute text-2xl text-gray-400">
          <Icon icon={"mdi:search"} />
        </span>

        <input
          type="text"
          className="w-full pl-5 border-gray-300 border rounded-md p-2"
          name="q"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
export { SearchInput };
