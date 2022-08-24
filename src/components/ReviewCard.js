import { Link } from "react-router-dom";

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
        <p>votes: {review.votes} </p>
      </span>
    </div>
  );
};

export default ReviewCard;
