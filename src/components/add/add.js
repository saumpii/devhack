import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./add.css";
import FileUpload from "../Input/FileUpload";
const Add = () => {
  return (
    <BrowserRouter>
      <form className="meme">
        <Link to="/Upload">
          <div className="containerg">
            <div className="edget">
              <button className="buttonh">
                <h3 className="yo">+</h3>
              </button>
            </div>
          </div>
        </Link>
        <div className="containerg">
          <div className="edget">
            <button className="buttonh">
              <h3 className="yo">-</h3>
            </button>
          </div>
        </div>
      </form>
    </BrowserRouter>
  );
};

export default Add;
