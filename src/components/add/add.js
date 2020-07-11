import React from "react";

const Add = () => {
  return (
    <div>
      <a className="button plus" href="#plus">
        <span className="bg" id="plus"></span>
        <span className="symbol"></span>
      </a>
      <a className="button minus" href="#minus">
        <span className="bg" id="minus"></span>
        <span className="symbol"></span>
      </a>
      <span className="cancel">
        <a href="#">Clear</a>
      </span>
    </div>
  );
};
