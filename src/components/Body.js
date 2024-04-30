import React from "react";
import ResaurantCard from "./ResaurantCard";
import { useState } from "react";
import restObjList from "../utils/mockData";
const Body = () => {
  //! Local State Variable - Super Powerful variable

  const [listOfRestaurants, setlistOfRestaurants] = useState(restObjList);

  //? Normal JS Variable
  //   let listOfRestaurants = restObjList;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestoList = listOfRestaurants.filter(
              (resObj) => resObj?.info.avgRating > "4.5"
            );
            setlistOfRestaurants(filterRestoList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <ResaurantCard resName={resObj} key={resObj.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
