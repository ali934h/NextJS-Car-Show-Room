// pages/categories/[category].js
import { useRouter } from "next/router";
import { filterCategory } from "../../helpers/filterHandler";
import carsData from "../../data/carsData";
import FilteredCar from "../../components/templates/FilteredCar";
import BackButton from "../../components/modules/BackButton";

function Category() {
  const category = useRouter().query.category;
  const filteredCars = filterCategory(category, carsData);
  return (
    <>
      <BackButton />
      <FilteredCar filteredCars={filteredCars} />;
    </>
  );
}
export default Category;
