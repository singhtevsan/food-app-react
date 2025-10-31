import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestauants] = useState([]);

    const topRatedList = () => {
        setFilteredRestauants( originalListOfRestaurants.filter( item => item.info.avgRating>=4.4 ));
    }

    const searchList = (value) => {
        setFilteredRestauants( originalListOfRestaurants.filter( item => item.info.name.toLowerCase().includes( value.toLowerCase() ) ) );
    }

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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return (
            <div class="body-container">
                <h1>Looks like you are offline!! Please check internet connectivity...</h1>
            </div>
        )
    };

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

                        return (
                            <div className="link-card" key={restaurant.info.id} >
                                <Link className="link" to={"/restaurant/" + restaurant.info.id}>
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                            </div>
                            
                        ) 
                        })
                    }
                    
                </div>
            }

        </div>
    )
};

export default Body;