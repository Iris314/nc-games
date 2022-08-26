import { useEffect, useState } from "react";
import { useContext } from "react";
import { postReview } from "../../api";
import { UserContext } from "../../contexts/UserContext";
import { fetchCategories } from "../../api";

const NewReview = () => {
  const [error, setError] = useState({ err: "" });
  const { CurrentUser } = useContext(UserContext);
  const [review, setReview] = useState({ username: "", body: "" });
  const [postStatus, setPostStatus] = useState(0);
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  const reviewPoster = (event) => {
    console.log(event);
    setReview({
      owner: CurrentUser.username,
      title: event.target[0].value,
      designer: event.target[1].value,
      review_body: event.target[2].value,
      category: event.target[4].value,
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (review.username === "") {
      setError("");
    } else if (review.review_body === "") {
      setError({ err: "Review can not be empty" });
    } else if (review.title === "") {
      setError({ err: "Title can not be empty" });
    } else if (review.designer === "") {
      setError({ err: "Designer can not be empty" });
    } else if (review.category === "select") {
      setError({ err: "Please select a category" });
    } else {
      setError({ err: "" });
      setPostStatus(2);
      postReview({ review })
        .then((res) => {
          if (res.msg) {
            setPostStatus(1);
          } else {
            window.location.reload(false);
          }
        })
        .catch(() => {
          setPostStatus(1);
        });
    }
  }, [review]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="newReview">
      <p>Post a new Review</p>
      <form className="commentForm" onSubmit={reviewPoster}>
        <div className="reviewDetailField">
          <div className="titleField">
            <input type="text" name="title" placeholder="Title"></input>
          </div>
          <div className="designerField">
            <input type="text" name="designer" placeholder="Designer"></input>
          </div>
        </div>
        <textarea
          type="text"
          className="commentField"
          placeholder="Write your review here"></textarea>
        <select className="categoryLinks">
          <option value="select">category</option>
          {categories.map((c) => {
            return (
              <option value={c.slug} key={c.slug}>
                {c.slug}
              </option>
            );
          })}
        </select>
        <input type="submit" className="submit"></input>
        <p className={error === "" ? "none" : "error"}>{error.err}</p>
        <p className={postStatus === 2 ? "succes" : "none"}>Succes!</p>
        <p className={postStatus === 1 ? "error" : "none"}>Error, try again</p>
      </form>
    </div>
  );
};

export default NewReview;
