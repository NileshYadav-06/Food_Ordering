import { useEffect, useState } from "react";
import { RestaurantMenu_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantMenu_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(resInfo.data)
  };

  return resInfo;
};

export default useRestaurantMenu;
