import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const ResaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  // console.log(props);
  const { resName } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    locality,
    areaName,
  } = resName?.info;
  return (
    <div
      className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-300"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>
        {locality}, {areaName}
      </h4>

      <h4>{resName?.info.sla.deliveryTime} min</h4>
      <h4>User {loggedInUser} </h4>
    </div>
  );
};

export const withPromatedLable = (ResaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <ResaurantCard {...props} />
      </div>
    );
  };
};
export default ResaurantCard;
