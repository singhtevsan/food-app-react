import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

    const [btnText, setBtnText] = useState("Login");
    
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
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