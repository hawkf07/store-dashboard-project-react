import { Icon } from "@iconify/react";
import { FC } from "react";
type CardIcon = {
  variant: "green" | "blue";
  icon: string;
};
export const CardIcon: FC<CardIcon> = ({ variant, icon }) => {
  return (
    <div
      className={`p-1 ${
        "bg-" + variant + "-500"
      } rounded-xl text-3xl text-gray-100 `}
    >
      <Icon icon={icon} />
    </div>
  );
};
