import React from "react";

export default function Notfound() {
  return (
    <div className="flex flex-col justify-center items-center -mt-5 h-dvh gap-4">
      <div className=" size-80 rounded-full text-3xl font-bold  bg-amber-300 flex  items-center justify-center">
        <p>404 NOT FOUND</p>
        
      </div>
      <a href="/" className="font-mono font-bold text-2xl text-blue-500 hover:text-blue-700" >Visit Home</a>
    </div>
  );
}
