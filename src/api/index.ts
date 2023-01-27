import axios from "axios";
import { ProductRoot } from "../types";
const fetchAllProduct = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const data: ProductRoot = response.data;

  return data;
};

export { fetchAllProduct };
