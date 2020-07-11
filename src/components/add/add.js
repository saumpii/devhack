import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./add.css";
import FileUpload from "../Input/FileUpload";
const Add = () => {
  return (
    <BrowserRouter>
      <form>
        <Link to="/Upload">
          <button>+</button>
        </Link>
        <button>-</button>
      </form>
    </BrowserRouter>
  );
};

export default Add;
