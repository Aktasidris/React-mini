import React from "react";
import Products from "./Products";
import Category from "../components/Category";
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 flex">
      <Category />
      <Products />
    </div>
  );
}
