import React from "react";
import { useSelector, useDispatch } from "react-redux";

const mssg = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;


  return(
  <h1>hi {userInfo.name}</h1> 
  <p>Conformation mssg</p>
  <button>Ok</button>
  <button>No</button>

  );

};
