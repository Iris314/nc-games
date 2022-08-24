import FeedbackReview from "../userInteraction/FeedbackReview";

const SingleReviewCard = ({ review }) => {
  const date = new Date(review.created_at);
  const newDate = date.toDateString();
  return (
    <div className="container">
      <h4 className="singleReviewTitle">
        <b>{review.title}</b>
      </h4>
      <img
        className="reviewImage"
        src={review.review_img_url}
        alt="review"></img>
      <span className="reviewData">
        <p> Created at: {newDate}</p>
        <p>By {review.owner}</p>
      </span>
      <p className="reviewBody">{review.review_body}</p>
      <span className="ratings">
        <p>comments: {review.comment_count}</p>
        <FeedbackReview review={review} />
      </span>
    </div>
  );
};

export default SingleReviewCard;
