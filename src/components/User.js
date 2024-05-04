import React, { useEffect } from "react";
const User = ({ name }) => {
  // useEffect(() => {
  //   console.log("User useEffect");
  //   const timer = setInterval(() => {
  //     console.log("from user.js setInterval");
  //   }, 1 * 1000);
  //   return () => {
  //     console.log("User useEffect return :", timer);
  //     clearInterval(timer);
  //   };
  // }, []);
  // console.log("User Render");
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: hl9242</h4>
    </div>
  );
};
export default User;
