import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Login from "./components/Sigin/login";
import SignUp from "./components/Sigin/register";
//import Load from "./components/loading";
import Add from "./components/add/add";
import FileUpload from "./components/Input/FileUpload";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/input" component={Add}></Route>
        <Route path="/Upload" component={FileUpload}></Route>
        {/*{<Route path="/EncryptoData" componenet={Load}></Route>}*/}
      </BrowserRouter>
    </div>
  );
};

export default App;
