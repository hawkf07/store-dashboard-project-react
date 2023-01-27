import { currencyFormatter } from "../utils/currencyFormatter";
import { Icon } from "@iconify/react";
import { Card } from "./Card";
import { CardIcon } from "./CardIcon";
import { CustomReport } from "./CustomReportSection";

const MainContent = () => {
  return (
    <main className="w-full p-3 flex flex-col gap-5 ">
      <section className="w-full">
        <header className="flex justify-between p-3 flex-col md:flex-row gap-3">
          <h1 className="font-semibold text-xl">Report - Top Products</h1>
          <div>Home/Report/Top Products</div>
        </header>
        <div className="card-group-1 grid md:grid-cols-2 gap-5">
          <Card>
            <div className="flex justify-around items-center">
              <header className="block w-full">
                <h1 className="text-green-500 font-medium text-2xl">
                  {currencyFormatter(15000)}
                </h1>
                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Services Income
                </h2>
              </header>
              <div className="bg-green-500 p-3 text-2xl rounded-full text-gray-100">
                <Icon icon="healthicons:money-bag" />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-around items-center">
              <header className="block w-full">
                <h1 className="text-green-500 font-medium text-2xl">
                  {currencyFormatter(15000)}
                </h1>
                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Services Income
                </h2>
              </header>
              <div className="bg-green-500 p-3 text-2xl rounded-full text-gray-100">
                <Icon icon="healthicons:money-bag" />
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-around items-center">
              <header className="block w-full">
                <h1 className="text-blue-500 font-medium text-2xl">1,250</h1>

                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Grooming Reservation
                </h2>
              </header>

              <CardIcon icon="material-symbols:list-alt-rounded" />
            </div>
          </Card>
          <Card>
            <div className="flex justify-around items-center">
              <header className="block w-full">
                <h1 className="text-blue-500 font-medium text-2xl">1,250</h1>

                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Hotel Reservation
                </h2>
              </header>

              <CardIcon icon="material-symbols:list-alt-rounded" />
            </div>
          </Card>
          <Card>
            <div className="flex justify-around items-center">
              <header className="block w-full ">
                <h1 className="text-blue-500 font-medium text-2xl">1,250</h1>

                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Product Sold
                </h2>
              </header>

              <CardIcon icon="material-symbols:list-alt-rounded" />
            </div>
          </Card>
        </div>
      </section>
      <CustomReport />
      <section className="p-3 bg-gray-100 rounded-md">
        <header>
          <h1>List Of Top Product Sales</h1>
        </header>
        <div className="flex gap-3">
          <button className="hover:bg-blue-500 bg-blue-400 p-1 px-3 rounded-xl text-gray-100">
            Top Sales
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 p-1 px-3 rounded-xl text-gray-100">
            Top Ratings
          </button>
        </div>
      </section>
    </main>
  );
};

export { MainContent };
