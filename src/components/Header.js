import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  let loginBtn = "Login";
  const [loginflag, setLoginflag] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => setLoginflag(!loginflag)}
          >
            {loginflag ? loginBtn : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
