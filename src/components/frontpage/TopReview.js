import { Link } from "react-router-dom";

const TopReview = ({ review }) => {
  return (
    <Link to={`./reviews/${review.review_id}`} className="container">
      <h5>Top Review</h5>
      <p>{review.title}</p>
      <p>By {review.owner}</p>
      <span className="topDetails">
        <p>Comments: {review.comment_count}</p>
      </span>
    </Link>
  );
};

export default TopReview;
