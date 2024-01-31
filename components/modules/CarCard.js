// components/modules/CarCard.js
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";

function CarCard(props) {
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
  } = props;
  return (
    <Link
      href={`/cars/${id}`}
      className="flex max-w-80 flex-col justify-center gap-y-3 border px-2 py-2"
    >
      <img src={image} alt={name} />
      <h1 className="text-lg font-bold">
        {name} {model}
      </h1>
      <div className="flex justify-between gap-x-4 text-sm text-slate-400">
        <span className="px-1">{year}</span>
        <span className="px-2">{distance}km</span>
      </div>
      <div className="flex justify-between">
        <span className="flex items-center rounded-md bg-primary px-2 text-sm font-bold">
          $ {price}
        </span>
        <div className="flex items-center justify-between">
          <span>{location}</span>
          <MdOutlineLocationOn className="text-2xl" />
        </div>
      </div>
    </Link>
  );
}
export default CarCard;
