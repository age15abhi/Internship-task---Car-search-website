import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CarDetails = () => {
  const cars = useSelector(state => state.allCars.cars[0]);
  // console.log(cars);
  const { carId } = useParams();
  // console.log(carId);

  let foundObjects = cars.filter(obj => obj.id === carId);
  console.log(foundObjects);
  const { id, title, model, year, fuelType, prize, people, type, image } =
    foundObjects[0];

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={image}
          alt=""
          className="p-10  w-full h-full aspect-square object-cover  rounded-full"
        />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">Special Offer</span>
          <h1 className="text-3xl font-bold">
            {title} {model} ({year})
          </h1>
        </div>
        <p className="text-gray-700">
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h6 className="text-2xl font-semibold mb-5">{prize}</h6>
        <button className="px-3 py-2  bg-blue-500 text-white font-semibold items-start w-2/5 rounded-lg mb-7">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
