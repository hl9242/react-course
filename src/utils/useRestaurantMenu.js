import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetechMenu();
  }, []);
  const fetechMenu = async () => {
    const apiData = await fetch(MENU_API_URL + resId);
    const json = await apiData.json();
    //   console.log(json.data);
    //   console.log(
    //     "===>",
    //     json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
    //       ?.card?.itemCards
    //   );
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
