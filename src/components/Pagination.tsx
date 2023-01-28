import { Icon } from "@iconify/react"
import { FC } from "react"
import { PaginationType } from "../types"
import clsx from 'clsx'
export const Pagination: FC<PaginationType> = ({ page, setPage, pageNumber }) => {
  return (
    <>
      <button className={clsx("cursor-pointer active:bg-blue-600 px-3 mx-1 py-1 rounded-md border-gray-500 border text-gray-600", page === pageNumber && "bg-blue-500 text-gray-50")} onClick={() => setPage(pageNumber)} >
        {pageNumber / 10}
      </button>

    </>
  )
}
