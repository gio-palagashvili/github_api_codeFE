import { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsTwitter, BsBuildingsFill } from "react-icons/bs";
import StatItem from "./components/StatItem";
import { ImLocation } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";
import axios from "axios";
import { format } from "date-fns";
import Nav from "./components/Nav";

const App: FC = () => {
  const [user, setUser] = useState<User>();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = () => {
    axios.get(`https://api.github.com/users/${query}`).then((data) => {
      setUser({ ...data.data });
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    handleSubmit();
  };

  return (
    <div className="bg-[#F5F8FF] text-[#4B6A9B] dark:text-white w-full h-full flex justify-center place-items-center dark:bg-[#141C2F]">
      <div className="w-[45rem] h-[40rem] flex flex-col gap-8">
        <Nav />
        <div className="input_div relative w-full drop-shadow-md shadow_cs">
          <div className="absolute inset-y-0 left-2 flex items-center pl-3">
            <CiSearch size={22} className="stroke-mainBlue stroke-1" />
          </div>
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="input bg-[#FEFEFE] dark:bg-mainBg w-full p-[1.8rem] rounded-xl pl-[3rem]"
            placeholder="Search github username"
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div className="absolute inset-y-0 right-2 flex items-center pl-3">
            <button
              className="text-sm bg-mainBlue h-[2.8rem] rounded-xl w-[5.5rem] hover:bg-[#0872e2] duration-300 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <div className="bg-[#FEFEFE] dark:bg-mainBg rounded-md h-[60%] p-10 shadow_cs flex">
          {user ? (
            <>
              <div className="w-[30%] h-full ">
                <img
                  src={user.avatar_url}
                  alt="pfp"
                  className="rounded-full w-28"
                />
              </div>
              <div className="w-full">
                <div className="header w-full flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <div className="w-full flex justify-between place-items-center">
                      <a href={user.html_url} className="hover:underline">
                        <h1 className="text-3xl font-bold">{user?.name}</h1>
                      </a>
                      <h1 className="text-sm">
                        Joined at{" "}
                        {format(
                          new Date(user?.created_at ? user?.created_at : 0),
                          "dd MMM yyyy"
                        )}
                      </h1>
                    </div>
                    <p className=" text-mainBlue">@{user?.login}</p>
                    <p className="text-slate-400 text-sm">
                      {user?.bio ? user.bio : "This profile has no bio"}
                    </p>
                  </div>
                  <div className="w-full bg-[#F5F8FF] dark:bg-[#141C2F] rounded-lg h-24 flex place-items-center gap-16 pl-10 drop-shadow-md">
                    <StatItem header="repos" stat={user?.public_repos} />
                    <StatItem header="followers" stat={user?.followers} />
                    <StatItem header="following" stat={user?.following} />
                  </div>

                  <div className="w-full flex gap-20">
                    <div className="div_socials_2 flex flex-col gap-3">
                      <div className="flex place-items-center gap-2">
                        <ImLocation size={17} />
                        <p className="text-sm">{user.location}</p>
                      </div>
                      <div
                        className={`flex place-items-center gap-2 ${
                          !user.blog ? "text-slate-400" : ""
                        }`}
                      >
                        <AiOutlineLink size={17} />
                        <p className="text-sm">
                          {user.blog ? user.blog : "Not Available"}
                        </p>
                      </div>
                    </div>
                    <div className="div_socials_2 flex flex-col gap-3">
                      <div
                        className={`flex place-items-center gap-2 ${
                          !user.twitter_username ? "text-slate-400" : ""
                        }`}
                      >
                        <BsTwitter size={17} />
                        <p className="text-sm">
                          {user.twitter_username
                            ? user.twitter_username
                            : "Not available"}
                        </p>
                      </div>
                      <div
                        className={`flex place-items-center gap-2 ${
                          !user.blog ? "text-slate-400" : ""
                        }`}
                      >
                        <BsBuildingsFill size={17} />
                        <p className="text-sm">
                          {user.blog ? user.blog : "Not available"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center">No user found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
