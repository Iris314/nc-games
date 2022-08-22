const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard" key={review.review_id}>
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
  );
};

export default ReviewCard;
