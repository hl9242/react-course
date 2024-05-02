import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnliineStatus";
export const Header = () => {
  let loginBtn = "Login";
  const [loginflag, setLoginflag] = useState(true);
  //! if no dependencies array passed then =>useEffect is called on every render
  //! if dependencies array is empty [] => useEffect is called on initial render(just once) of component
  //! if dependencies array is [loginflag] => called everytime loginflag is updated
  useEffect(() => {
    // console.log("From Header useEffect");
  }, [loginflag]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
