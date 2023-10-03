import React, { useState } from "react";
import { useSelector } from "react-redux";

import CarComponent from "./CarComponent";
import Pagination from "./Pagination";

const CarListing = ({ searchCar }) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carPerPage] = useState(6);

  const carsList = useSelector(state => state.allCars.cars[0]);

  let filterCar = carsList.filter(car => {
    // console.log(car.title.toLowerCase());
    // console.log(searchCar);
    if (car.title && searchCar) {
      return car.title.toLowerCase() === searchCar;
    }
    return car;
  });

  // get current posts
  const indexOfLastCard = currentPage * carPerPage;
  const indexOfFirstCard = indexOfLastCard - carPerPage;
  const currentCard = filterCar.slice(indexOfFirstCard, indexOfLastCard);

  // Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {/* <h1>Filtered Items</h1> */}
      <div className="grid grid-cols-3 gap-3 p-4 ">
        <CarComponent cars={currentCard} />
      </div>
      <div className="mx-2 my-7">
        <Pagination
          carPerPage={carPerPage}
          totalCars={filterCar.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default CarListing;
