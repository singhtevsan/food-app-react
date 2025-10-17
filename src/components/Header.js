const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NDG_SR77n8xtaRwNksZyk1oFmSQiQKBN8X4OQj68dwNc8hjWh3QI3qA&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};

export default Header;