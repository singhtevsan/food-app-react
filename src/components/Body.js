import resList, { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (

        <div className="body-container">

            <div className="search">
                Search
            </div>
            <div className="restaurant-container">

                {/* Restaurant Card */}

                <RestaurantCard resData={resObj} />
                <RestaurantCard resData={resList[1]} />
                
                {
                    resList.map((restaurant) => {

                       return <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
                
            </div>

        </div>
    )
};

export default Body;