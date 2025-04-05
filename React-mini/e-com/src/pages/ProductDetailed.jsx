import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/slices/ProductsSlice";
import { addtoBasket } from "../redux/slices/basketSlice";
import Loading from "../components/Loading";
import { CiShoppingCart } from "react-icons/ci";

export default function ProductDetailed() {
  const { id } = useParams();
  const { products, selectedProducti } = useSelector((store) => store.product);
  const { title, price, category, image, description } = selectedProducti;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products?.length) return;

    const product = products.find((product) => String(product.id) === id);
    if (product) {
      dispatch(selectedProduct(product));
    }
  }, [id, products, dispatch]);

  const addBasket = () => {
    if (count > 0) {
      const payload = {
        id,
        count,
        image,
        price,
      };
      dispatch(addtoBasket(payload));
    }
  };

  if (!selectedProducti || !price) return <Loading></Loading>;

  return (
    <div className="grid grid-cols-9 justify-items-center border-10 rounded-xl   border-rose-800 items-center">
      <img
        src={image}
        className="col-span-3 p-2 w-full object-cover rounded-md "
      />

      <div className="col-span-6 bg-rose-50 ">
        <div className="relative w-full h-full flex flex-col  gap-2 ps-2 pt-3">
          <div className="">
            <h2 className="font-bold text-md  text-rose-500 text-sm sm:text-md">
              {title}
            </h2>
            <span className="text-sm font-light text-rose-900">{category}</span>
            <p className="tex-wrap font-thin text-xs sm:text-sm mt-8 font-mono text-red-700 p-3">
              {description}
            </p>
          </div>
          <div className="flex flex-col  w-full sm:w-11/12 bg-white rounded-sm p-1 mt-auto mb-2 mx-auto ">
            <div className="flex justify-between w-full px-3 mb-2">
              <div className="flex items-center justify-center gap-2 flex-row">
                <button
                  className="md:size-8 size-6 rounded-full bg-rose-100 hover:bg-rose-400 md:text-xl text-md pb-1 hover:text-white"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <span className="text-xs sm:text-sm md:text-md">{count}</span>
                <button
                  className="md:size-8 size-6 rounded-full bg-rose-100 hover:bg-rose-400 md:text-xl text-md pb-1 hover:text-white"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </button>
              </div>
              <span className="font-bold mb-2 text-rose-800 text-xs sm:text-sm md:text-md">
                ${price}
              </span>
            </div>
            <button
              className="px-2 py-1 mb-0 bg-rose-600 text-white  border-4 rounded-lg hover:border-rose-400  font-bold w-full flex justify-center items-center"
              onClick={addBasket}
            >
              <CiShoppingCart className="text-[25px]" />
              Add Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
