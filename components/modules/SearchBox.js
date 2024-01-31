// components/modules/SearchBox.js
import Link from "next/link";
import { useState } from "react";

function SearchBox() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <div className="mt-3 flex w-1/2 flex-col items-center text-sm">
      <div className="flex h-full w-full flex-col gap-y-10">
        <div className="flex w-full gap-x-2">
          <div className="flex w-full flex-col gap-y-2">
            <input
              className="rounded-md border px-2 py-1"
              type="text"
              value={minPrice}
              placeholder="Enter Min-Price"
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
            <input
              className="rounded-md border px-2 py-1"
              type="text"
              value={maxPrice}
              placeholder="Enter Max-Price"
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
          </div>
          <Link
            href={`/filter/${minPrice || 0}/${maxPrice || 100_000_000}`}
            className="flex items-center rounded-md border bg-primary px-3"
          >
            Search
          </Link>
        </div>

        <div className="flex justify-between gap-x-3 text-base">
          <Link
            className="w-full rounded-md bg-primary py-3 text-center"
            href="/categories/sedan"
          >
            Sedan
          </Link>
          <Link
            className="w-full rounded-md bg-primary py-3 text-center"
            href="/categories/suv"
          >
            Suv
          </Link>
          <Link
            className="w-full rounded-md bg-primary py-3 text-center"
            href="/categories/hatchback"
          >
            Hatchback
          </Link>
          <Link
            className="w-full rounded-md bg-primary py-3 text-center"
            href="/categories/sport"
          >
            Sport
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SearchBox;
