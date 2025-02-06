import { setSearchedQuery } from "@/redux/jobSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import '../run.css';

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-600 font-medium">
            <span className="text-[#614232]">
              {" "}
              <PiBuildingOfficeBold />
            </span>{" "}
            India's #1 Job Hunt Website
          </span>

          <h2 className="text-5xl font-bold">
            Search Apply & <br />
            Land Your <span className="text-[#6A38C2] typing-animation">Dream Job</span>
          </h2>

          <p>
            Kickstart your search for top, life-changing career opportunities in your <br />
            preferred locations and get hired faster!
          </p>

          {/* 3d effect */}
            <div className="flex w-[40%] shadow-xl border border-gray-300 rounded-full items-center gap-2 mx-auto p-2 transform hover:scale-105 transition-all">
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find Your Dream Job"
                className="outline-none border-none w-full py-2 px-4 rounded-l-full text-black focus:ring-2 focus:ring-blue-500 placeholder:text-sm placeholder:italic bg-gradient-to-r from-blue-100 to-indigo-100 transform transition-all hover:scale-60"
              />
              <Button
                onClick={searchjobHandler}
                className="rounded-r-full py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white transform transition-all hover:scale-110 hover:shadow-xl"
              >
                <Search className="h-5 w-5 text-white" />
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
