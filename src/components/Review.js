import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "../api";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState();

  console.log(useParams());
  useEffect(() => {
    fetchReview(review_id).then(({ review }) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <div className="reviewBody">
      <div class="reviewCard">
        <ReviewCard review={review} />
      </div>
    </div>
  );
};

export default Review;
