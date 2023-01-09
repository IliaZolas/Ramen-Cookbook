import {Link} from 'react-router-dom';
import './navbar.css';
import Cookies from "universal-cookie";

const cookies = new Cookies();
console.log(cookies)

const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    // window.location.href = "/";
  }

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
                <Link to="/login" className="navitem">
                    Login
                </Link>
                <a href='/' onClick={() => logout()} className="navitem">
                    Logout
                </a>
                <Link to="/account" className="navitem">
                    Account
                </Link>
            </div>
        </div>
    );
};

export default Navbar;