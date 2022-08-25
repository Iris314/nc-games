import { Link } from "react-router-dom";

const RecentReview = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`} className="container">
      <h5>Most Recent Review</h5>
      <p>{review.title}</p>
      <p>By {review.owner}</p>
      <span className="topDetails">
        <p>Votes: {review.votes}</p>
      </span>
    </Link>
  );
};

export default RecentReview;
