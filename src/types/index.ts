import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ProductRoot {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type SidebarNavItem = {
  icon: string;
  title: string;
  children: ReactNode;
};
export type SidebarDropdownContainerType = {
  children: ReactNode;
};
export type SidebarDropdownItemType = {
  name: string;
};
export type PaginationType = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  pageNumber: number,
}
export type SearchInputComponent = {
  setSearchQuery: Dispatch<SetStateAction<string>>,
  searchQuery: string
}
