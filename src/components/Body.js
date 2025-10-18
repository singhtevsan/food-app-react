import { useState } from "react";
import resList, { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const handleClick = () => {
        setListOfRestaurants( listOfRestaurants.filter( item => item.info.avgRating>=4.4 ));
    }

    return (

        <div className="body-container">

            <div className="filter">
                
                <div>
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div>
                    <button className="rated-btn" onClick={handleClick}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="restaurant-container">

                {/* Restaurant Card */}

                <RestaurantCard resData={resObj} />
                <RestaurantCard resData={resList[1]} />
                
                {
                    listOfRestaurants.map((restaurant) => {

                       return <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
                
            </div>

        </div>
    )
};

export default Body;