import { FC, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsSunFill } from "react-icons/bs";

const App: FC = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const changetheme = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
    console.log(theme);
  };
  return (
    <div className="bg-[#F5F8FF] text-[#4B6A9B] dark:text-white w-full h-full flex justify-center place-items-center dark:bg-[#141C2F]">
      <div className="w-[35rem] h-[30rem] flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <h1 className="text-2xl font-bold">devfinder</h1>
          <button
            className="uppercase text-[0.85rem] flex place-items-center gap-2  justify-center dark:hover:bg-[#1F2A48] hover:bg-slate-900 hover:text-white p-3 rounded-xl duration-200"
            onClick={changetheme}
          >
            <p className="">Light</p>
            <BsSunFill size={20} />
          </button>
        </div>
        <div className="input_div relative mb w-full drop-shadow-md">
          <div className="absolute inset-y-0 left-2 flex items-center pl-3">
            <CiSearch size={22} className="stroke-[#0079FE] stroke-1" />
          </div>
          <input
            type="text"
            className="input bg-[#FEFEFE] dark:bg-[#1F2A48] w-full p-[1.8rem] rounded-xl pl-[3rem]"
            placeholder="Search github username"
          />
          <div className="absolute inset-y-0 right-2 flex items-center pl-3">
            <button className="text-sm bg-[#0079FE] h-[2.8rem] rounded-xl w-[5.5rem] hover:bg-[#0872e2] duration-300 text-white">
              Search
            </button>
          </div>
        </div>
        <div className="bg-red-500">s</div>
      </div>
    </div>
  );
};

export default App;
