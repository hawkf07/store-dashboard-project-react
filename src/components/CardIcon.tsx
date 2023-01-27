import { Icon } from "@iconify/react";
import clsx from "clsx";
import { FC } from "react";
type CardIcon = {
  icon: string;
};
export const CardIcon: FC<CardIcon> = ({ icon }) => {
  return (
    <div className={`bg-blue-400 p-3 rounded-full text-gray-100 text-2xl`}>
      <Icon icon={icon} />
    </div>
  );
};
