import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMenu, IoSearch } from "react-icons/io5";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { tooglebasket } from "../redux/slices/basketSlice";

export default function Header() {
  const [thema, setThema] = useState(false);
  const {basketproducts,openstatus}=useSelector((store)=>store.basket)
const dispatch=useDispatch()
  return (
    <div className="w-full sm:py-2 shadow-lg flex flex-row justify-between items-center px-2 sm:px-5 sm:h-15 mb-5">
      <div className=" flex justify-center items-center gap-2 sm:text-lg text-rose-400 hover:border-b-1 font-italic">
        <a href="/">
          <img
            src="../src/img/logo.png"
            alt=""
            className="logo  size-11 sm:size-14"
          />
        </a>
      </div>
      <ul className="hidden font-bold gap-3 text-rose-500 sm:flex sm:text-md ">
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/account">Account</a>
        </li>
      </ul>

      <div className="flex flex-row gap-3 ms-0 sm:mx-5">
        <div className="relative flex flex-row items-center">
          <input
            type="text"
            placeholder="search..."
            className="search-input text-[8px] sm:text-xs outline-none border-b-1 border-gray-400 text-gray-600 w-15 sm:w-full  "
          />
          <IoSearch className="absolute text-[12px] right-0 sm:text-[18px] mb-1" />
        </div>

        <div className="icons flex flex-row gap-1 text-sm md:text-xl">
          <Badge badgeContent={basketproducts.length} color="primary"  >
            <FaBasketShopping onClick={()=>dispatch(tooglebasket(!openstatus))} />
          </Badge>

          {thema ? (
            <FaMoon onClick={() => setThema(!thema)} />
          ) : (
            <IoSunnyOutline onClick={() => setThema(!thema)} />
          )}
        </div>

        <button className="size-4 sm:hidden">
          <IoMenu />
        </button>
      </div>
    </div>
  );
}
