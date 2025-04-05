import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Category() {
  const { products } = useSelector((store) => store.product);

  const categories = products?.length
    ? [...new Set(products.map((product) => product.category))]
    : [];

  return (
    <div className=" md:col-span-3 w-full  bg-white shadow-md rounded-md px-4 hidden md:block">
      <h3 className="text-sm md:text-md font-bold border-b pb-2 text-center md:text-left text-rose-500">
        Categories
      </h3>
      <div className="px-1  mx-auto">
        <ul className="text-xs md:text-sm flex flex-col gap-2 mt-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li
                key={category}
                className="rounded py-2 bg-rose-300 text-white text-center 
                hover:text-gray-800 hover:bg-rose-600 transition-all cursor-pointer 
                md:px-3 md:py-2 lg:text-lg"
              >
                {category}
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-xs md:text-sm italic text-center">
              No categories found
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
