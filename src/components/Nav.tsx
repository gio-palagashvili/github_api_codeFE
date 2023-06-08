import { FC } from "react";
import { BsSunFill } from "react-icons/bs";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <button className="uppercase text-[0.85rem] flex place-items-center gap-2  justify-center dark:hover:bg-mainBg hover:bg-slate-900 hover:text-white p-3 rounded-xl duration-200">
        <p className="">Light</p>
        <BsSunFill size={20} />
      </button>
    </div>
  );
};

export default Nav;
