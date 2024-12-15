import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // console.log("header rendered");

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" alt="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> AboutUs </Link>
          </li>
          <li>
            <Link to="/contact"> ContactUs</Link>
          </li>
          <li><Link to= "/cart"> Cart(0)</Link></li>
          <button
            className="loginBtn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
