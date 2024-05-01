import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetechMenu();
  }, []);
  const fetechMenu = async () => {
    const apiData = await fetch(MENU_API_URL + resId);
    const json = await apiData.json();
    console.log(json.data);
    console.log(
      "===>",
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card?.itemCards
    );
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1> {name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3> </h3>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} -{"Rs. "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li>
        <li>{itemCards[4].card.info.name}</li>
        <li>Burger</li>
        <li>Coffe</li> */}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
