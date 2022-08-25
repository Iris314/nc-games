import FeedbackComment from "./FeedbackComment";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../api";

const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const dateNow = new Date(Date.now());
  const newDate = date.toDateString();
  const { CurrentUser } = useContext(UserContext);

  const removeComment = () => {
    deleteComment(comment.comment_id).then(() => window.location.reload(false));
  };

  const currentDay = () => {
    return comment.author === CurrentUser.username &&
      date.getFullYear() === dateNow.getFullYear() &&
      date.getMonth() === dateNow.getMonth() &&
      date.getDate() === dateNow.getDate()
      ? true
      : false;
  };

  return (
    <div className="container">
      <p>{comment.body}</p>
      <span className="reviewData">
        <h4>{comment.author}</h4>
        <p>on {newDate}</p>
      </span>
      <div className={comment.author === CurrentUser.username ? "none" : ""}>
        <FeedbackComment comment={comment} />
      </div>
      <div
        className={
          comment.author === CurrentUser.username ? "feedback" : "none"
        }>
        <p>votes: {comment.votes}</p>
      </div>
      <div className="delete">
        <button
          className={currentDay() ? "deleteButton" : "none"}
          onClick={removeComment}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default CommentCard;
