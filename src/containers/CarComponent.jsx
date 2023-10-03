import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { UsersIcon } from "@heroicons/react/24/outline";
import { BsFuelPumpDiesel } from "react-icons/Bs";
import { GiSteeringWheel } from "react-icons/Gi";
import { AiOutlineHeart } from "react-icons/Ai";
import { Link } from "react-router-dom";

const CarComponent = ({ cars, searchCar }) => {
  const renderList = cars.map(car => {
    const { id, title, model, year, fuelType, prize, people, type, image } =
      car;
    // console.log(id, image);
    return (
      <div key={id}>
        <Link to={`/car/${id}`}>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-3 p-3 ">
            <img
              className="w-full rounded-lg  "
              src={image}
              alt="Sunset in the mountains"
            />
            {/* title and year */}
            <div className="flex justify-between my-3">
              {/* title or model */}
              <div className="flex space-x-2">
                <h1 className="text-md ">{title}</h1>
                <h1 className="text-md ">{model}</h1>
              </div>
              {/* year */}
              <div className="border border-blue-400 border-dashed rounded-full text-center w-14">
                {year}
              </div>
            </div>

            {/* people fuelType and type */}
            {/* people */}
            <div className="flex space-x-10 my-1">
              <div className="flex space-x-1 text-xs text-slate-700 items-center">
                <UsersIcon className="w-4 text-blue-400" />
                <span>{people} People</span>
              </div>
              <div className="flex space-x-1 text-xs text-slate-700 items-center">
                <BsFuelPumpDiesel className="w-4 text-blue-400" />
                <span>{fuelType}</span>
              </div>
            </div>
            {/* wheel */}
            <div className="flex space-x-10 my-2">
              <div className="flex space-x-1 text-xs text-slate-700 items-center">
                <GiSteeringWheel className="w-4 text-blue-400" />
                <span>{type}</span>
              </div>
            </div>

            {/* horizontal row */}
            <hr className=" border-1 border-slate-300" />

            {/* prize like button or rent now Button */}
            <div className="flex justify-between">
              <div className="flex space-x-10 my-4">
                <div className="flex space-x-1 text-sm text-slate-700 items-center">
                  <h1 className="font-semibold text-xl">{prize}</h1>
                  <span className="text-xs">/ month</span>
                </div>
              </div>
              {/* like button or rent button */}
              <div className="flex items-center justify-center">
                {/* like button */}
                <div className="py-2 flex justify-center items-center space-x-2">
                  <div className=" bg-blue-200 rounded-lg items-center justify-center text-center py-2 px-2">
                    <AiOutlineHeart className="text-blue-400" />
                  </div>
                  {/* rent now button */}
                  <button className=" bg-blue-400 rounded-lg items-center justify-center text-center px-2 py-1 text-md text-white">
                    Rent now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default CarComponent;
