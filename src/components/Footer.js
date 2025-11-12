import { LOGO_URL } from "../utils/constant"

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <img src={LOGO_URL} className="footer-logo" />
                <h5>@2025 All Rights Reserved.</h5>
            </div>
            <div className="company">
                <h4>Company</h4>
                <ul>
                    <li>Corporate</li>
                    <li>Team</li>
                    <li>Minis</li>
                    <li>Instamart</li>
                </ul>
            </div>
            <div className="company">
                <h4>Contact US</h4>
                <ul>
                    <li>Mail</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div className="company">
                <h4>Life At</h4>
                <ul>
                    <li>Explore With US</li>
                    <li>Newslatter</li>
                    <li>Links</li>
                    <li>Snackables</li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;