import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { CurrentUser } = useContext(UserContext);
  return (
    <>
      <span className="header">
        <Link className="userBanner" to="./users">
          <img src={CurrentUser.avatar_url} alt="avatar"></img>
          <span className="tooltiptext">{CurrentUser.username}</span>
        </Link>
        <Link to="./">
          <h1>NC - Games</h1>
        </Link>
        <span className="headerLinks">
          <Link to="/reviews">All Reviews</Link>
          <Link to="./reviews/new">New Review</Link>
        </span>
      </span>
    </>
  );
};

export default Header;
