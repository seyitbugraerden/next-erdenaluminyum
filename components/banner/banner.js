import React from "react";

const Banner = ({ text }) => {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{ height: "400px", width: "100vw", backgroundColor: "#0A1439" }}
    >
      <div className="bg-white position-absolute start-50 bottom-0 clip"></div>
      <div className="bg-white position-absolute start-0 bottom-0 clip_sec"></div>

      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-5 text-white fw-bold mt-5 text-uppercase">
          {text}
          <div
            className="w-100 bg-white"
            style={{ height: "1px", marginTop: "1.5rem" }}
          ></div>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
