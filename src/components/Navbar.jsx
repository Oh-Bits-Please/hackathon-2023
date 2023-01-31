import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex flex-row">
        <div>
          <Link to="/">
            <img
              src="/src/images/cart.png"
              alt="cart image with words find it"
              className="h-1 w-1"
            />
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <img
              src="/src/images/avatar.png"
              alt="profile image"
              className="h-1 w-1"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
