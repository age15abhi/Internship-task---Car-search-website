import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import CarComponent from "./CarComponent";
import CarListing from "./CarListing";

const Header = () => {
  const [search, setSearchCar] = useState("");

  return (
    <header>
      <nav className=" bg-slate-200 shadow-md">
        <div className="flex gap-4  items-center max-w-2xl  mx-auto p-2 w-full h-14 ">
          <form className="bg-slate-100 p-3 rounded-lg flex items-center h-9">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-50  "
              onChange={e => setSearchCar(e.target.value)}
            />
            <MagnifyingGlassIcon className="text-slate-600 w-3" />
          </form>
          <ul className="flex gap-4 text-sm items-center justify-center">
            <li className="flex items-center justify-center  text-slate-700  ">
              Relevance
              <ChevronDownIcon className="w-3 text-center" />
            </li>
            <li className="flex items-center justify-center text-slate-700  ">
              All brands
              <ChevronDownIcon className="w-3 text-center" />
            </li>
          </ul>
        </div>
      </nav>
      {search ? <CarListing searchCar={search} /> : ""}
    </header>
  );
};
export default Header;
