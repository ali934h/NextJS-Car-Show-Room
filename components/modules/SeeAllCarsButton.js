// components/modules/SeeAllCarsButton.js
import Link from "next/link";
function SeeAllCarsButton() {
  return (
    <Link
      href="/cars"
      className="h-full w-1/2 rounded-md bg-primary py-2 text-center text-base"
    >
      See all cars
    </Link>
  );
}
export default SeeAllCarsButton;
