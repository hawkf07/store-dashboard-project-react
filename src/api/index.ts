import axios from "axios";
import { useQuery } from "react-query";
import { ProductRoot } from "../types";
const fetchAllProduct = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=10&skip=0");
  const data: ProductRoot = response.data;
  return data;
};

const searchProductByQuery = async (q: string) => {
  const response = await axios.get("https://dummyjson.com/products/search?q=" + q)
  const data: ProductRoot = response.data
  console.log(q)
  return data
}
const usePagination = (pageNumber: number) => {
  return useQuery(["paginatedProduct", pageNumber], async () => {
    const { data }: { data: ProductRoot } = await axios.get("https://dummyjson.com/products?limit=10&skip=" + pageNumber)
    return data
  }, { keepPreviousData: true })

}

export { fetchAllProduct, searchProductByQuery, usePagination };


