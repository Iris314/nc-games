import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <span>
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
