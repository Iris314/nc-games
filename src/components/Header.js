import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { CurrentUser } = useContext(UserContext);
  const { CurrentTheme, setCurrentTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    setCurrentTheme(!CurrentTheme);
  };

  useEffect(() => {}, []);

  return (
    <>
      <span className="header">
        <span className="topHeader">
          <label className="themeSwitch">
            <input type="checkbox" onClick={toggleMode} />
            <span className="slider"></span>
          </label>
          <Link className="userBanner" to="./users">
            <img src={CurrentUser.avatar_url} alt="avatar"></img>
            <span className="tooltiptext">{CurrentUser.username}</span>
          </Link>
        </span>

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
