import { useState } from "react";
import AccordianList from "./AccordianList";

const RestaurantCategory = (props) => {

    const {object, showAccord, func} = props;
    const {title, itemCards} = object?.card?.card;

    // const [showAccord, setShowAccord] = useState(false);

    const handleClick = () => {
        // setShowAccord(!showAccord);
        func();
    }

    return (
        <div>
            {/* Accordian Header */}
            <div className="flex justify-between items-center mt-4 p-6 h-10 bg-gray-200 cursor-pointer shadow-lg" onClick={handleClick}>
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span>{showAccord ? '🔼' : '🔽'}</span>
            </div>

            {/* Accordian Body */}
            { 
                showAccord && <AccordianList accordianList={itemCards} /> 
            }
        </div>
    )
};

export default RestaurantCategory;