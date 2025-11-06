import { IMG_CDN } from "../utils/constant";

const RestaurantCard = (props) => {

    const {resData, label} = props;
    
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
        <div className="res-card relative">
            <img className="card-img" src={IMG_CDN + cloudinaryImageId} alt ="res-img"/>
            {
                /* if promoted label is true show it in the card */
                label ? 
                <label className="absolute bg-black text-white text-lg p-[3px] top-[5px] left-[5px] rounded">
                    Promoted
                </label> : ''
            }
            
            <div className="card-details">
                <h3 className="font-bold">{name}</h3>
                <p>{cuisine.join(", ")}</p>
                <h4 className="font-semibold">{costForTwo}</h4>
                <h4 className="font-semibold"><span className="text-green-700">★</span> {avgRating}</h4>
                <h4 className="font-semibold">{sla?.deliveryTime} Minutes</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;