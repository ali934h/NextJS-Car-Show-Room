// pages/index.js
import SearchBox from "../components/modules/SearchBox";
import FilteredCar from "../components/templates/FilteredCar";
import carsData from "../data/carsData";
import SeeAllCarsButton from "../components/modules/SeeAllCarsButton";

function index() {
  const filteredCars = carsData.slice(0, 3);
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-y-5">
      <SearchBox />
      <SeeAllCarsButton />
      <FilteredCar filteredCars={filteredCars} />;
    </div>
  );
}
export default index;
