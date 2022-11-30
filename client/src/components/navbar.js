import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="">
            <div className="">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/ramen">
                        <li>Ramens</li>
                    </Link>
                    <Link to="/new-ramen">
                        <li>Add a ramen</li>
                    </Link>
                    <Link to="/update-ramen">
                        <li>Update a ramen</li>
                    </Link>
                </ul>
            </div>
        </div>
      );
};

export default Navbar;