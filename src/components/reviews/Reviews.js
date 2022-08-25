import { useEffect, useState } from "react";
import { fetchReviews, fetchCategories } from "../../api";
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryLoading, setisCategoryLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
      setisCategoryLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

  const selectCategory = (event) => {
    event.target.value === "select"
      ? setSearchParams()
      : setSearchParams({ category: event.target.value });
  };

  if (isLoading || isCategoryLoading) return <p>Loading...</p>;
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
