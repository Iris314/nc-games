import FeedbackComment from "./FeedbackComment";

const CommentCard = ({ comment }) => {
  const date = new Date(comment.created_at);
  const newDate = date.toDateString();

  return (
    <div className="container">
      <p>{comment.body}</p>
      <span className="reviewData">
        <h4>{comment.author}</h4>
        <p>on {newDate}</p>
      </span>
      <FeedbackComment comment={comment} />
    </div>
  );
};
export default CommentCard;
