import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import ReviewCard from "./ReviewCard";

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
    <div className="reviewBody">
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </div>
  );
};

export default Reviews;
