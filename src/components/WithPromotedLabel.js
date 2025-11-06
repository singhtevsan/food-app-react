const WithPromotedLabel = (RestaurantCard) =>{

    return (props) => {
        return (
            <RestaurantCard {...props} label={true} /> 
        )
    }
};

export default WithPromotedLabel;