import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useGetRestaurantData from "../utils/useGetRestaurantData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useGetRestaurantData(resId);

    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfo == null){
        return <Shimmer />
    }

    const {name,cuisines, costForTwoMessage, avgRating } = resInfo?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categoryList = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter( (item)=> item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="flex justify-center border border-black mt-[5px]">
            <div className="flex flex-col w-[50%] m-8">
                <div className="font-bold text-2xl flex flex-col border border-solid p-4 m-2 rounded-2xl">
                    <h2>{name}</h2>
                    <h2>{cuisines.join(", ")}</h2>
                    <h2>{costForTwoMessage}</h2>
                    <h2>{avgRating} <span className="text-green-700">★</span></h2>
                </div>
                <div>
                    <span className="flex justify-center italic font-bold p-4">Menu</span>
                </div>
                <div>
                    {
                        categoryList.map((category,index)=>{
                            return (
                                <RestaurantCategory key={index}
                                                    object={category}
                                                    func={() => setShowIndex(index==showIndex ? -1 : index)}
                                                    showAccord = {index==showIndex}
                                />
                            )
                        })

                    }

                </div>
            </div>
        </div>
    )
};

export default RestaurantMenu;