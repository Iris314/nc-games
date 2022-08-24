import { Link } from "react-router-dom";
import FeedbackReview from "./FeedbackReview";

const ReviewCard = ({ review }) => {
  return (
    <div className="container">
      <Link to={`/reviews/${review.review_id}`}>
        <h4>
          <b>{review.title}</b>
        </h4>
        <img
          className="reviewImage"
          src={review.review_img_url}
          alt="review"></img>
        <p>By {review.owner}</p>{" "}
      </Link>
      <span className="ratings">
        <p>comments: {review.comment_count}</p>
        <FeedbackReview review={review} />
      </span>
    </div>
  );
};

export default ReviewCard;
