import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navitems">
                <Link to="/" className="navitem">
                    Home
                </Link>
                <Link to="/ramen" className="navitem">
                    Ramens
                </Link>
                <Link to="/new-ramen" className="navitem">
                    Add a ramen
                </Link>
                <Link to="/signup" className="navitem">
                    Signup
                </Link>
            </div>
        </div>
    );
};

export default Navbar;