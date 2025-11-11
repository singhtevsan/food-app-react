import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Filter = (props) => {

    const [searchText, setSearchText] = useState("");

    const {searchList, topRatedList} = props;

    const sendDataToParent = () => {
        searchList(searchText);
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
         <div className="filter">
                
                <div>
                    <input type="text" value={searchText} 
                    onChange={ (event)=> { setSearchText(event.target.value) } } />
                    <button onClick={sendDataToParent}>Search</button>
                </div>
                <div>
                    <button className="rated-btn" onClick={topRatedList}>Top Rated Restaurants</button>
                </div>
                <div>
                    <input type="text" value={loggedInUser} 
                    onChange={ (event) => setUserName(event.target.value) } />
                </div>
            </div>
    )
};

export default Filter;