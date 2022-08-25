import { useEffect, useState } from "react";
import { postComment } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const NewComment = ({ review_id }) => {
  const [error, setError] = useState(null);
  const { CurrentUser } = useContext(UserContext);
  const [comment, setComment] = useState({ username: "", body: "" });
  const [postStatus, setPostStatus] = useState(0);

  const commentPoster = (event) => {
    setComment({
      username: CurrentUser.username,
      body: event.target[0].value,
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (comment.username === "") {
      setError(null);
    } else if (comment.body === "") {
      setError({ err: "body can not be empty" });
    } else {
      setError(null);
      setPostStatus(2);
      postComment({ comment }, review_id)
        .then((res) => {
          if (res.msg) {
            setPostStatus(1);
            setError(res.msg);
          } else {
            window.location.reload(false);
          }
        })
        .catch((err) => {
          setError({ err });
        });
    }
  }, [comment, review_id]);

  return (
    <div>
      <p>Post a new comment</p>
      <form className="commentForm" onSubmit={commentPoster}>
        <textarea type="text" className="commentField"></textarea>
        <input type="submit" className="submit"></input>
        <p className={error === null ? "none" : "error"}>
          Field can not be empty
        </p>
        <p className={postStatus === 2 ? "succes" : "none"}>Success!</p>
        <p className={postStatus === 1 ? "error" : "none"}>Error, try again</p>
      </form>
    </div>
  );
};

export default NewComment;
