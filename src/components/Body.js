import React from "react";
import ResaurantCard from "./ResaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnliineStatus";
// import restObjList from "../utils/mockData";
const Body = () => {
  //* Local State Variable - Super Powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [listOfFilterRestaurants, setlistOfFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetechData();
  }, []);
  const fetechData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.890984&lng=77.6400098&page_type=DESKTOP_WEB_LISTING"
    );
    const apiData = await data.json();

    setlistOfRestaurants(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setlistOfFilterRestaurants(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //* Normal JS Variable
  //   let listOfRestaurants = restObjList;
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks Like your Internet connection loss 😔</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filterArryaResto = listOfRestaurants.filter((resto) =>
                resto.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );
              setlistOfFilterRestaurants(filterArryaResto);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestoList = listOfRestaurants.filter(
              (resObj) => resObj?.info.avgRating >= 4.5
            );
            setlistOfFilterRestaurants(filterRestoList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilterRestaurants.map((resObj) => (
          <Link
            style={{ color: "rgb(0 0 0)" }}
            to={"/restaurants/" + resObj.info.id}
          >
            <ResaurantCard resName={resObj} key={resObj.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
