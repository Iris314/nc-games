import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { CurrentUser } = useContext(UserContext);
  const { CurrentTheme, setCurrentTheme } = useContext(ThemeContext);

  const toggleMode = () => {
    setCurrentTheme(!CurrentTheme);
  };

  return (
    <>
      <header className={CurrentTheme ? "header dark" : "header"}>
        <span className="topHeader">
          <label className="themeSwitch">
            <input type="checkbox" onClick={toggleMode} />
            <span className="slider"></span>
          </label>
          <Link className="userBanner" to="./users">
            <div className="userBannerContainer">
              <img src={CurrentUser.avatar_url} alt="avatar"></img>
              <span className="tooltiptext">{CurrentUser.username}</span>
            </div>
          </Link>
        </span>
        <div className="title">
          <Link to="./">
            <h1>House of Games</h1>
          </Link>
        </div>
        <span className="headerLinks">
          <Link to="/reviews">All Reviews</Link>
          <Link to="./reviews/new">New Review</Link>
        </span>
      </header>
    </>
  );
};

export default Header;
