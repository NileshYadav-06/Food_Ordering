import {CDN_URL} from "../utils/constants";
const Restaurantcard = (props) => {
  // console.log(props);
  // console.log(props.resData);
    const {resData} = props;
    return (
      <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}> 
      <img 
      className='res-logo'
      alt="res-logo" 
      src={
        CDN_URL + 
      resData.info.cloudinaryImageId}/>
       <h3>{resData.info.name}</h3>
       <h3>{resData.info.cuisines.join(", ")}</h3>
       <h4 className="rating" >{resData.info.avgRating} stars</h4>
       <h4>{resData.info.costForTwo}</h4>
       <h4> {resData.info.sla.deliveryTime} minutes</h4>
      
      </div>

    );
  };

  
export default Restaurantcard;