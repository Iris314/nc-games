import { useEffect, useState } from "react";
import { useContext } from "react";
import { postReview } from "../../api";
import { UserContext } from "../../contexts/UserContext";

const NewReview = ({ review_id }) => {
  const [error, setError] = useState(null);
  const { CurrentUser } = useContext(UserContext);
  const [review, setReview] = useState({ username: "", body: "" });
  const [postStatus, setPostStatus] = useState(0);

  const reviewPoster = (event) => {
    setReview({
      username: CurrentUser.username,
      body: event.target[0].value,
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (review.username === "") {
      setError(null);
    } else if (review.body === "") {
      setError({ err: "body can not be empty" });
    } else {
      setError(null);
      setPostStatus(2);
      postReview({ review }, review_id)
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
  }, [review, review_id]);

  return (
    <div>
      <p>Post a new Review</p>
      <form className="commentForm" onSubmit={reviewPoster}>
        <span className="titleField">
          <input type="text" name="title" placeholder="title"></input>
        </span>
        <textarea type="text" className="commentField"></textarea>
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
