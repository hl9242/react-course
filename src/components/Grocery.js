import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome our Online Grocery store!!!</h1>
      <h4 className="text-2xl font-bold">User {loggedInUser} </h4>
    </div>
  );
};
export default Grocery;
