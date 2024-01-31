// pages/cars/[carId].js
import { BsBuildings } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import { FaRegRegistered } from "react-icons/fa";
import { GiRoad } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

function Car() {
  const carId = useRouter().query.carId;
  const carTarget = carsData[carId - 1];
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    image,
    category,
  } = carTarget;
  return (
    <div className="mb-20 mt-5 flex flex-col gap-y-7">
      <img src={image} alt={name} className="rounded-lg" />
      <h1 className="text-2xl font-bold">
        {name} {model}
      </h1>
      <div className="flex flex-col gap-y-5 rounded-md border px-4 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex items-center gap-x-2 text-xl">
          <BsBuildings />
          <span className="">Company</span>
          <span className="ml-auto">{name}</span>
        </div>
        <div className="flex items-center gap-x-2 text-xl">
          <BsPatchCheck />
          <span className="">Model</span>
          <span className="ml-auto">{model}</span>
        </div>
        <div className="flex items-center gap-x-2 text-xl">
          <FaRegRegistered />
          <span className="">First Registration</span>
          <span className="ml-auto">{year}</span>
        </div>
        <div className="flex items-center gap-x-2 text-xl">
          <GiRoad />
          <span className="">Kms Driven</span>
          <span className="ml-auto">{distance}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 rounded-md border px-4 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex items-center gap-x-2 text-xl">
          <MdLocationOn />
          <span className="">Location</span>
          <span className="ml-auto">{location}</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 rounded-md border px-4 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <h1 className="text-xl font-bold">Extra Information</h1>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-y-3 rounded-md border px-4 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex items-center gap-x-2 text-xl">
          <AiOutlineDollar className="text-4xl" />
          <span className="text-2xl font-bold">Price:</span>
          <span className="ml-auto">{price}</span>
        </div>
      </div>
      <button className="w-full rounded-lg bg-primary py-4 text-center text-xl font-bold">
        Buy
      </button>
    </div>
  );
}
export default Car;
