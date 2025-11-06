import AccordianItem from "./AccordianItem";

const AccordianList = ({accordianList}) => {

    return (
        <div>
            {
                accordianList.map( (itemCard) => {
                    return <AccordianItem key={itemCard.card.info.id} itemCard={itemCard} />
                }) 
            }
        </div>
        
    )
};

export default AccordianList;