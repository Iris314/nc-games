import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <div>
        <div className="container">
          <img
            className="reviewImage"
            src={review.review_img_url}
            alt="review"></img>
          <h4>
            <b>{review.title}</b>
          </h4>
          <p>By {review.owner}</p>
          <span className="ratings">
            <p>comments: {review.comment_count}</p>
            <p>votes: {review.votes}</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
