import { Icon } from "@iconify/react";
import { Card } from "./Card";
const CustomReport = () => {
  return (
    <section className="">
      <Card>
        <header className="p-3">
          <h1>Custom Report</h1>
        </header>
        <div className="flex gap-3 justify-between md:flex-row flex-col p-5">
          <select className="select  w-full max-w-xs border outline-blue-300 select-info text-info">
            <option>Today</option>
            <option>20-21-23</option>
          </select>
          <select className="select  w-full max-w-xs border outline-blue-300 select-info text-info">
            <option>Nov 22,2022 - Nov 23,2022</option>
            <option>20-21-23</option>
          </select>
        </div>
        <div className="w-full flex text-blue-400 items-center justify-end gap-2">
          <Icon icon="mdi:download-outline" className="text-blue-400 " />
          <p>Export Data</p>
        </div>
      </Card>
    </section>
  );
};

export { CustomReport };
