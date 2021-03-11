import { Link } from "react-router-dom";

const Menu = () => (
  <ul>
    <li>
      <Link to="/">About </Link>
    </li>
    <li>
      <Link to="/bio">Bio </Link>
    </li>
  </ul>
);

export default Menu;
