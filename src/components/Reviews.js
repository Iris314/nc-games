import { useEffect, useState } from "react";
import { fetchReviews, fetchCategories } from "../api";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
    });
    fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

  const selectCategory = (event) => {
    event.target.value === "select"
      ? window.location.replace(`/reviews`)
      : window.location.replace(`/reviews/${event.target.value}`);
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <select
        className="categoryLinks"
        onChange={selectCategory}
        defaultValue={category ? category : "select"}>
        <option value="select">category</option>
        {categories.map((c) => {
          return (
            <option value={c.slug} key={c.slug}>
              {c.slug}
            </option>
          );
        })}
      </select>
      <div className="reviewBody">
        {reviews.map((review) => {
          return (
            <div className="reviewCard" key={review.review_id}>
              <ReviewCard review={review} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
