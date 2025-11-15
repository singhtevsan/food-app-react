import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {

    // subscribing to the store 
    const cartItems = useSelector( (store) =>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    let total = 0;

    return (
        <div className="flex justify-center items-center border mt-1">
            <div className="flex flex-col w-[50%] m-4">
                <div>
                    <span className="flex justify-center italic font-bold p-4">Cart</span>
                </div>
                {
                    cartItems.length == 0 ? <div className="font-bold border-2 p-6 text-center bg-gray-200">
                        <h1>Your Cart Is Empty.</h1>
                    </div> : 
                    <div className="text-right cart">
                        <button className="p-1" onClick={handleClearCart}>Clear Cart</button>
                    </div>
                }
                {
                    cartItems.map((item,index) => {
                        total += item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100;
                        return (
                            <div key={index} className="flex justify-between items-center border-b-2 p-8 h-10 bg-gray-200">
                                <span className="font-bold">{item?.card?.info?.name}</span>
                                <div className="flex-row justify-between items-center">
                                    <span className="font-bold">₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </span>
                                    <span className="ml-4 text-xl font-bold cursor-pointer" onClick={ ()=> handleRemoveItem(item) }>x</span>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    cartItems.length !=0 && <div className="flex justify-between items-center border-b-2 p-6 h-10 bg-gray-200">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">₹ {total}</span>
                    </div>
                }
            </div>
        </div>
    )
};

export default Cart;