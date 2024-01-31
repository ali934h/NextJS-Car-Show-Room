// components/templates/FilteredCar.js
import BackButton from "../modules/BackButton";
import CarCard from "../modules/CarCard";

function FilteredCar({ filteredCars }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-5 gap-y-5 py-4">
      {filteredCars.map((car) => {
        return <CarCard key={car.id} {...car} />;
      })}
    </div>
  );
}
export default FilteredCar;
