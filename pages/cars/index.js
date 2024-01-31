// pages/cars/index.js
import SearchBox from "../../components/modules/SearchBox";
import FilteredCar from "../../components/templates/FilteredCar";
import carsData from "../../data/carsData";
function Cars() {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-y-5">
      <SearchBox />
      <FilteredCar filteredCars={carsData} />;
    </div>
  );
}
export default Cars;
