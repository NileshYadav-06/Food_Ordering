import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    console.log("api calling");
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=385824&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(name);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Rating - {avgRatingString}</h3>
      <h2> Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
