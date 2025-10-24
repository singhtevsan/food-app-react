import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {

    const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestauants] = useState([]);

    useEffect( () =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data  = await fetch(SWIGGY_API);
        const json = await data.json();

        let swiggy_res = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setOriginalListOfRestaurants(swiggy_res);
        setFilteredRestauants(swiggy_res);
    }

    const topRatedList = () => {
        setFilteredRestauants( originalListOfRestaurants.filter( item => item.info.avgRating>=4.4 ));
    }

    const searchList = (value) => {
        setFilteredRestauants( originalListOfRestaurants.filter( item => item.info.name.toLowerCase().includes( value.toLowerCase() ) ) );
    }

    if(originalListOfRestaurants.length == 0){
       
        return (
            <Shimmer />
        )
    }

    return (

        <div className="body-container">

            <Filter searchList={searchList} topRatedList={topRatedList} />

            {
                filteredRestaurants.length == 0 ? <h1>No Restaurant Found............... </h1> :

                <div className="restaurant-container">

                    {/* Restaurant Card */}

                    {/* <RestaurantCard resData={resObj} /> */}
                    {/* <RestaurantCard resData={resList[1]} /> */}
                    
                    {
                        filteredRestaurants.map((restaurant) => {

                        return <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                        })
                    }
                    
                </div>
            }

        </div>
    )
};

export default Body;