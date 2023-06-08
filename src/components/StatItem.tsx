import { FC } from "react";

interface StatItemProps {
  header: string;
  stat?: number;
}

const StatItem: FC<StatItemProps> = ({ header, stat }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm capitalize">{header}</p>
      <p className="text-xl font-bold">{stat}</p>
    </div>
  );
};

export default StatItem;
