import React from "react";

const Digit = (props) => {
  return (
    <div
      className="card bg-dark text-white d-flex align-items-center justify-content-center fs-1"
      style={{ width: "5rem", height: "5rem" }}
    >
      {props.digit}
    </div>
  );
};

export default Digit;
