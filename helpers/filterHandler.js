// helpers/filterHandler.js
export const filterPrice = (minPrice, maxPrice, carData) => {
  const filteredCars = carData.filter((car) => {
    return car.price >= minPrice && car.price <= maxPrice;
  });
  return filteredCars;
};
export const filterCategory = (carCategory, carData) => {
  const filteredCars = carData.filter((car) => car.category === carCategory);
  return filteredCars;
};
