import React from "react";
import { CDN_URL } from "../utils/constants";
const ResaurantCard = (props) => {
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
      className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200"
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
    </div>
  );
};
export default ResaurantCard;
