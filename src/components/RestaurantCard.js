import { IMG_CDN } from "../utils/constant";

const RestaurantCard = (props) => {

    const {resData} = props;
    
    const {
        cloudinaryImageId, name, cuisines, 
        avgRating, costForTwo, sla
    } = resData?.info;
        

    return (
        <div className="res-card">
            <img className="card-img" src={IMG_CDN + cloudinaryImageId} alt ="res-img"/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla?.deliveryTime}</h5>
        </div>
    )
};

export default RestaurantCard;