import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/ProductsSlice";
import Product from "../components/Product";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="col-span-12 md:col-span-9">
      <h3 className="ms-3 text-sm sm:text-md font-bold text-rose-500 border-b w- pb-2">Products</h3>
      <div className="grid grid-cols-6 gap-5">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
