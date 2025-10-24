import { IMG_CDN } from "../utils/constant";

const RestaurantCard = (props) => {

    const {resData} = props;
    
    const {
        cloudinaryImageId, name, cuisines, 
        avgRating, costForTwo, sla
    } = resData?.info;
        
    let cuisine = [];
    if(cuisines.length >= 4){
        for(let i=0;i<4;i++){
            cuisine.push(cuisines[i]);
        }
    }
    else cuisine = cuisines;

    return (
        <div className="res-card">
            <img className="card-img" src={IMG_CDN + cloudinaryImageId} alt ="res-img"/>
            <div className="card-details">
                <h3>{name}</h3>
                <p>{cuisine.join(", ")}</p>
                <h4>{costForTwo}</h4>
                <h4><span className="text-green-700">★</span> {avgRating}</h4>
                <h4>{sla?.deliveryTime} Minutes</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;