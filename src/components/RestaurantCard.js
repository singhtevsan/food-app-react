const RestaurantCard = (props) => {

    const {resData} = props;
    
    const {
        cloudinaryImageId, name, cuisines, 
        avgRating, costForTwo, sla
    } = resData?.info;
        

    return (
        <div className="res-card">
            <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla?.deliveryTime}</h5>
        </div>
    )
};

export default RestaurantCard;