import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky">
        <ul className="list-none">
          <li>
            <Link to="/">
              <img
                src="/src/images/cart.png"
                alt="cart image with words find it"
                className="w-50 h-50"
              />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src="/src/images/avatar.png" alt="profile image" />
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
