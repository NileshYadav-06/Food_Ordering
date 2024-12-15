import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log (resInfo);
  

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(name);

  const itemCardsData =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card.card.itemCards
    );
  console.log(itemCardsData);
  
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
