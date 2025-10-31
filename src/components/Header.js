import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnText, setBtnText] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
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
                    <li>Cart</li>
                    <li className="login-btn" 
                    onClick={ () => {
                        setBtnText( btnText === "Login" ? "Logout" : "Login");
                    }
                    }>
                        {btnText}
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default Header;