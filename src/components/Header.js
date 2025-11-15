import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnText, setBtnText] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const user = useContext(UserContext);

    // subscribing to the store using selector
    const cartItems = useSelector( (store) => store.cart.items);
    
    return (
        <div className="header">

            <div className="logo-container">
                <Link className="link" to="/" ><img className="logo" alt="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? '🟢' : '🔴'}</li>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about" >About</Link></li>
                    <li>Contact</li>

                    <li><Link className="link" to="/cart">
                        Cart-{cartItems.length}
                    </Link></li>
                    
                    <li className="login-btn" 
                    onClick={ () => {
                        setBtnText( btnText === "Login" ? "Logout" : "Login");
                    }
                    }>
                        {btnText}
                    </li>
                    
                    <li>{user.loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
};

export default Header;