import { useEffect, useState } from "react";
import { useContext } from "react";
import { postReview } from "../../api";
import { UserContext } from "../../contexts/UserContext";
import { fetchCategories } from "../../api";

const NewReview = () => {
  const [error, setError] = useState(null);
  const { CurrentUser } = useContext(UserContext);
  const [review, setReview] = useState({ username: "", body: "" });
  const [postStatus, setPostStatus] = useState(0);
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  const reviewPoster = (event) => {
    setReview({
      owner: CurrentUser.username,
      title: event.target[0].value,
      review_body: event.target[1].value,
      designer: review.designer,
      category: review.category,
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (review.username === "") {
      setError(null);
    } else if (review.review_body === "") {
      setError({ err: "review can not be empty" });
    } else if (review.title === "") {
      setError({ err: "title can not be empty" });
    } else if (review.designer === "") {
      setError({ err: "designer can not be empty" });
    } else {
      setError(null);
      setPostStatus(2);
      postReview({ review })
        .then((res) => {
          if (res.msg) {
            setPostStatus(1);
            setError(null);
          } else {
            window.location.reload(false);
          }
        })
        .catch((err) => {
          setError({ err });
        });
    }
  }, [review]);

  return (
    <div>
      <p>Post a new Review</p>
      <form className="commentForm" onSubmit={reviewPoster}>
        <div className="titleField">
          <input type="text" name="title" placeholder="Title"></input>
        </div>
        <div className="designerField">
          <input type="text" name="designer" placeholder="Designer"></input>
        </div>
        <textarea
          type="text"
          className="commentField"
          placeholder="Write your review here"></textarea>
        <div className="urlField">
          <input type="text" name="url" placeholder="Image URL"></input>
        </div>
        <input type="submit" className="submit"></input>
        <p className={error === null ? "none" : "error"}>
          Field can not be empty
        </p>
        <p className={postStatus === 2 ? "succes" : "none"}>Succes!</p>
        <p className={postStatus === 1 ? "error" : "none"}>Error, try again</p>
      </form>
    </div>
  );
};

export default NewReview;
