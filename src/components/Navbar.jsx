import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <ul className="list-none">
        <li>
          <Link to="/">
            <img
              src="/src/images/cart.png"
              alt="cart image with words find it"
              className="w-50 h-50"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src="/src/images/avatar.png" alt="profile image"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
