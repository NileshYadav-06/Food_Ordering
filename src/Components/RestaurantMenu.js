import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RestaurantMenu_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RestaurantMenu_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(name);

  const itemCardsData =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card.card.itemCards
    );
  console.log(itemCardsData);
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card.card.itemCards)?.card?.card;

  // console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h3 className="rating">{avgRatingString} stars</h3>
      <h2> Menu</h2>
      <ul>
        {itemCardsData.map((item) =>
          item.card.card.itemCards.map((i) => (
            <li key={i.card.info.id}>
              {i.card.info.name} - {"Rs."}
              {i.card.info.price / 100 || i.card.info.defaultPrice / 100}
            </li>
          ))
        )}
        ;
      </ul>
    </div>
  );
};
export default RestaurantMenu;
