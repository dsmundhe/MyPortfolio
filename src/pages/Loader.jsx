import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="loader-stack">
        <span className="loader"></span>
        <p>DM's Portfolio is loading...</p>
      </div>
    </div>
  );
};

export default Loader;
