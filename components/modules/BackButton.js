// components/modules/BackButton.js
import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowBackCircleSharp } from "react-icons/io5";
function BackButton() {
  const router = useRouter();
  return (
    <div className="w-9/12">
      <button
        onClick={() => {
          router.back();
        }}
        href="/"
        className="flex w-fit items-center justify-center gap-x-1 self-start rounded-md bg-primary px-2 py-2 text-xl font-bold"
      >
        <IoArrowBackCircleSharp className="text-3xl" />
        Back
      </button>
    </div>
  );
}
export default BackButton;
