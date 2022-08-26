import { Link } from "react-router-dom";

const TopReview = ({ review }) => {
  return (
    <Link
      to={`./reviews/${review.review_id}`}
      style={{
        backgroundColor: "white",
        opacity: "0.9",
      }}>
      <h5>Top Review</h5>
      <p>{review.title}</p>
      <p>By {review.owner}</p>
      <span className="ratings">
        <p>Comments: {review.comment_count}</p>
        <p>Votes: {review.votes}</p>
      </span>
    </Link>
  );
};

export default TopReview;
