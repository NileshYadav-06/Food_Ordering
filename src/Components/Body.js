import RestrauntCard from "../Components/RestrauntCard";
import restaurantsList from "../utils/mockData";

const Body = () => {
    return(
      <div className='body'>
        <div className='search-bar'>
          <input className="input-btn" type="text"></input>
          <button className="search-btn">search</button>
        </div>

        <div className='restro-container'>
     {restaurantsList.map((restaurant)=>(

     <RestrauntCard  key={restaurant.info.id} resData ={restaurant}/>
     ))}
        </div>
      </div>
    );
  };

  export default Body;