import { IMG_CDN } from "../utils/constant";

const AccordianItem = ({itemCard}) => {
    
    const {name, price, defaultPrice, description, imageId} = itemCard?.card?.info;

    return (
        <div className="flex justify-between items-center bg-gray-100 p-4 border-b">
            <div className="w-[70%] m-1">
                <p className="font-bold">{name}</p>
                <p className="font-bold">₹ {price /100 || defaultPrice /100}</p>
                <p className="text-justify text-sm mt-1 p-1 wrap-break-word">{description}</p>
            </div>
            <div className="w-[30%] flex justify-center relative">
                <img src={IMG_CDN + imageId} className="rounded "/>
                <button className="absolute -bottom-2 border cursor-pointer p-2 px-4 rounded bg-white text-black hover:bg-gray-800 hover:text-white">Add</button>
            </div>
        </div>
    )
};

export default AccordianItem;