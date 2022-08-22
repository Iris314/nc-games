import { useEffect, useState } from "react";
import { fetchReviews } from "../api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) return <p>Loading...</p>;
  return (
    <span className="reviewBody">
      {reviews.map((review) => {
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
      })}
    </span>
  );
};

export default Reviews;
