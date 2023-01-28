import { currencyFormatter } from "../utils/currencyFormatter";
import { Icon } from "@iconify/react";
import { Card } from "./Card";
import { CardIcon } from "./CardIcon";
import { CustomReport } from "./CustomReportSection";
import { SearchInput } from "./SearchInput";
import { useQuery } from "react-query";
import { fetchAllProduct, searchProductByQuery, usePagination } from "../api";
import { ProductList } from "./ProductList";
import { ChangeEvent, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { ProductRoot } from "../types";

const MainContent = () => {
  const [product, setProduct] = useState<ProductRoot | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(0)
  const { data, error, isError, isLoading, isPreviousData } = usePagination(page)
  const SKIP_PAGE_NUMBER = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  return (
    <main className="w-full p-3 flex flex-col gap-5   md:mt-0">
      <section className="w-full mt-12 md:mt-0">
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
        <header className="p-3 text-xl text-gray-600 font-bold">
          <h1>List Of Top Product Sales</h1>
        </header>
        <div className="flex gap-3 px-3 font-semibold">
          <button className="hover:bg-blue-500 bg-blue-400 p-1 px-3 rounded-xl text-gray-100">
            Top Sales
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 p-1 px-3 rounded-xl text-gray-100">
            Top Ratings
          </button>
        </div>
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex justify-between md:flex-row flex-col text-center mt-5">
          <div>
            <p>Showing {data?.total ? data?.total / 10 : null} Entries</p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <p>filter : </p>
            <select
              name="filter"
              className="text-blue-400 bg-gray-100 p-3 rounded "
              id="filter-product-by-value"
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          {isLoading ? "Loading ..." : isError ? "Error " + error : data?.products.map((product) => (
            <>
              <ProductList {...product} />
            </>
          ))}
        </div>
        <div className="gap-1 flex justify-end flex-wrap items-center">
          {SKIP_PAGE_NUMBER.map((pageNumber) => <Pagination pageNumber={pageNumber} page={page} setPage={setPage} />)}
        </div>
      </section>    </main>
  );
};

export { MainContent };
