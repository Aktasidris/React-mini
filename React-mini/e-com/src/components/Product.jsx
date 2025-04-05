import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, title, price, category, image } = product;
  const navigate = useNavigate();
  const productDetail = () => {
    navigate(`/products-detailed/${id}`);
  };

  return (
    <div className="shadow-xl flex flex-col  rounded-md hover:shadow-gray-700 bg-white w-full col-span-3 sm:col-span-2 ">
      {/* Ürün Görseli */}
      <div className="p-3 flex flex-col items-center">
        {/* <a href={`/products-detailed/${id}`}> react-dom-router kullandığım için a etiketi ile bir nagigate yaptığımda store sıfırlanır o yüzden link etiketleri ile navigate etmek lazım yada burdaki gibi buton ile navigate etmemiz lazım */}
        <img src={image} className="w-full h-40 object-contain" alt={title} />
        <h3 className=" text-[10px] md:text-[12px] md:text-sm font-semibold text-center text-rose-500 h-16 overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </h3>
        {/* </a> */}
        <div className="border-t w-full border-gray-400 pt-1">
          <span className="text-blue-600 text-[10px] md:text-xs font-bold underline">
            {category}
          </span>
        </div>
      </div>

      {/* Fiyat ve Buton */}
      <div className="flex flex-col justify-between bg-rose-50 rounded-b-md mt-auto w-full text-[8px] sm:text-sm">
        <div className="flex felx-row justify-between my-2">
          <span className="font-bold text-rose-500 w-full text-right text-[10px] me-2">
            ${price}
          </span>
        </div>
        <button
          className="flex justify-center items-center gap-2 bg-rose-800 text-white rounded-md py-2 hover:bg-rose-600"
          onClick={productDetail}
        >
          Product Detail
        </button>
      </div>
    </div>
  );
}
