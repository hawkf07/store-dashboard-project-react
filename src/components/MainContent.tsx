import { currencyFormatter } from "../utils/currencyFormatter";
import { Card } from "./Card";

const MainContent = () => {
  return (
    <main className="w-full">
      <section>
        <header>
          <h1 className="font-semibold text-xl">Report - Top Products</h1>
          <div>
            Home/Report/Top Products
          </div>
        </header>
        <section className="card-group-1 grid grid-cols-2 gap-5">
          <Card>
            <div className="flex justify-around items-center">
              <header className="block">
                <h1 className="text-green-500 font-medium text-2xl">
                  {currencyFormatter(15000)}
                </h1>
                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Services Income
                </h2>
              </header>

              <div>Icon</div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-around items-center">
              <header className="block">
                <h1 className="text-green-500 font-medium text-2xl">
                  {currencyFormatter(15000)}
                </h1>
                <h2 className="text-sm text-gray-500 font-semibold">
                  Total Services Income
                </h2>
              </header>

              <div>Icon</div>
            </div>
          </Card>
        </section>
      </section>
    </main>
  );
};

export { MainContent };
