import RestrauntCard from "../Components/RestrauntCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
// import restaurantsList from "../utils/mockData";

const Body = () => {
  // State variable  - super powerful variable with the use REACT
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // this is also called as array destructuring

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Whenever a state variables update, react trigger a reconciliation cycle (re-renders the components)
  // console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />; // this is called conditional rendering
  }

  return (
    <div className="body">
      <div className="search-bar">
        <div className="search-item">
          <input
            className="input-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter the restaurants card and update the UI
              // search text
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              // Filter to top rated restaurants Logic is here!

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Find Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restro-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestrauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
