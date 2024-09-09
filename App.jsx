import Footer from "../assets/component/Footer";
import Header from "../assets/component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Postlistcontext from "../assets/store/store-context";

import Side from "../assets/component/Side";

import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [selecttabs, setselecttabs] = useState("Home");
  return (
    <Postlistcontext>
      <div className="app-container">
        <Side selecttabs={selecttabs} setselecttabs={setselecttabs}></Side>
        <div className="contain">
          <Header></Header>
          {/* {selecttabs == "Home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )} */}
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </Postlistcontext>
  );
}

export default App;
