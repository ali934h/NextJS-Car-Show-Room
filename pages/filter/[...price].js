// pages/filter/[...price].js

import { useRouter } from "next/router";
import FilteredCar from "../../components/templates/FilteredCar";
import { filterPrice } from "../../helpers/filterHandler";
import carsData from "../../data/carsData";
import BackButton from "../../components/modules/BackButton";

function Price() {
  const route = useRouter();
  const routerArray = route.query.price || [0, 100000000];
  const [minPrice, maxPrice] = [
    Math.min(...routerArray),
    Math.max(...routerArray),
  ];
  const filteredCars = filterPrice(minPrice, maxPrice, carsData);
  return (
    <>
      <BackButton />
      <FilteredCar filteredCars={filteredCars} />;
    </>
  );
}
export default Price;
