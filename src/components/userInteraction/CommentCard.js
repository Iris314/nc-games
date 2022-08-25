import FeedbackComment from "./FeedbackComment";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../api";

const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const newDate = date.toDateString();
  const { CurrentUser } = useContext(UserContext);

  const removeComment = () => {
    deleteComment(comment.comment_id).then(() => window.location.reload(false));
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
      <div className="delete">
        <button
          className={
            comment.author === CurrentUser.username ? "deleteButton" : "none"
          }
          onClick={removeComment}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default CommentCard;
