import React from "react";
import { CDN_URL } from "../utils/constants";
const ResaurantCard = (props) => {
  // console.log(props);
  const { resName } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resName?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{resName?.info.sla.deliveryTime} min</h4>
    </div>
  );
};
export default ResaurantCard;
