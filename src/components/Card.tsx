import { ReactNode, FC } from "react";

type Card = {
  children: ReactNode;
};
export const Card: FC<Card> = ({ children }) => {
  return <div className="card bg-gray-100 rounded-md p-5 shadow-md">{children}</div>;
};
