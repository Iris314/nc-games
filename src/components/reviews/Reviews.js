import { useEffect, useState } from "react";
import { fetchReviews, fetchCategories } from "../../api";
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState();
  const [sorting, setSorting] = useState();
  const [currentSort, setCurrentsort] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCategoryLoading, setisCategoryLoading] = useState(true);
  const [sortToggle, setSortToggle] = useState(false);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
      setisCategoryLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchReviews(searchParams.toString()).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sort_by, order]);

  const selectCategory = (event) => {
    const params = Object.fromEntries([...searchParams.entries()]);
    event.target.value === "select"
      ? delete params.category
      : (params.category = event.target.value);
    setSearchParams(params);
  };

  const sortCards = (event) => {
    const params = Object.fromEntries([...searchParams.entries()]);
    event.target.value === "select"
      ? delete params.sort_by
      : (params.sort_by = event.target.value);
    setSearchParams(params);
  };

  const switchSort = () => {
    setSortToggle(!sortToggle);
    const params = Object.fromEntries([...searchParams.entries()]);
    params.order = sortToggle ? "asc" : "desc";
    setSearchParams(params);
  };

  if (isLoading || isCategoryLoading) return <p>Loading...</p>;
  return (
    <>
      <span className="filtering">
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
        <span className="sortingField">
          <select
            className="sorting"
            onChange={sortCards}
            defaultValue={currentSort ? currentSort : "Sort by"}>
            <option value="select">Sort by</option>
            <option value="category">category</option>
            <option value="title">title</option>
            <option value="date">date</option>
            <option value="owner">owner</option>
            <option value="votes">votes</option>
            <option value="comments">comments</option>
          </select>
          <button className={sortToggle ? "" : "none"} onClick={switchSort}>
            <b>&#x21e7;</b>
          </button>
          <button className={sortToggle ? "none" : ""} onClick={switchSort}>
            <b>&#x21e9;</b>
          </button>
        </span>
      </span>

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
