import { useState } from "react";

const Filter = (props) => {

    const [searchText, setSearchText] = useState("");

    const {searchList, topRatedList} = props;

    const sendDataToParent = () => {
        searchList(searchText);
    }

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
            </div>
    )
};

export default Filter;