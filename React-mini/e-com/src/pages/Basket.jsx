import React from "react";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/slices/basketSlice";
import { CiCircleRemove } from "react-icons/ci";

export default function Basket({ basket }) {
  // Genel toplam (grand total)
  const grandTotal = basket.reduce((acc, product) => {
    const productTotal = Number(product.price) * Number(product.count);
    return acc + productTotal;
  }, 0);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="p-4 w-80">
      <h2 className="text-xl font-bold mb-4 text-rose-600">Your Basket</h2>

      {basket.length === 0 ? (
        <p className="text-sm text-gray-500">Basket is empty.</p>
      ) : (
        <>
          {basket.map((product) => {
            const productTotal = (
              Number(product.price) * Number(product.count)
            ).toFixed(2);
            return (
              <div
                key={product.id}
                className="flex items-center gap-3 border-b py-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{product.title}</p>
                  <p className="text-xs text-gray-600">
                    Quantity: {product.count}
                  </p>
                  <p className="text-xs text-gray-500">
                    Price: ${product.price}
                  </p>
                  <p className="text-xs text-rose-500 font-bold">
                    Total: ${productTotal}
                  </p>
                </div>
                <CiCircleRemove
                  onClick={() => handleDelete(product.id)}
                  className=" text-rose-600 text-3xl hover:bg-rose-700 rounded-full hover:text-white "
                ></CiCircleRemove>
              </div>
            );
          })}

          <div className="border-t mt-4 pt-2 text-right">
            <p className="text-md font-bold text-rose-600">
              Grand Total: ${grandTotal.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
