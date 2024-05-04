import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnliineStatus";
import UserContext from "../utils/UserContext";
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

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => setLoginflag(!loginflag)}
          >
            {loginflag ? loginBtn : "Logout"}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
