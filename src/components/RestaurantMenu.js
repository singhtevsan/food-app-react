import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useGetRestaurantData from "../utils/useGetRestaurantData";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useGetRestaurantData(resId);
    
    if(resInfo == null){
        return <Shimmer />
    }

    const {name,cuisines, costForTwoMessage, avgRating } = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <h2>{cuisines.join(", ")}</h2>
                <h2>{costForTwoMessage}</h2>
                <h2>{avgRating} ★</h2>
            </div>
            <div>
                <h3>Menu</h3>
            </div>
            <div>
                {
                    itemCards.map((item,index)=>{
                        return (
                            <li key={index} >{item?.card?.info?.name} Rs- {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                        )
                    })

                }

            </div>
        </div>
    )
};

export default RestaurantMenu;