// components/modules/BackButton.js
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
function BackButton() {
  return (
    <div className="w-9/12">
      <Link
        href="/"
        className="flex w-fit items-center justify-center gap-x-1 self-start rounded-md bg-primary px-2 py-2 text-xl font-bold"
      >
        <IoArrowBackCircleSharp className="text-3xl" />
        Back
      </Link>
    </div>
  );
}
export default BackButton;
