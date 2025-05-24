// components/Loader.jsx
import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
    <div className="flex items-center justify-center flex-col">
          <span class="loader"></span>
      <p className="text-xl font-medium mt-10">DM's Portfolio is Loading...</p>
    </div>
     
    </div>
  );
};

export default Loader;
