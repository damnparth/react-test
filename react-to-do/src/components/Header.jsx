
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
function Header() {
  return (
    <ul className="Header">
      <li>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </li>
      <li>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </li>
    </ul>
  );
}

export default Header;
