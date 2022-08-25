import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview, fetchComments } from "../../api";
import SingleReviewCard from "./SingleReviewCard";
import CommentCard from "../userInteraction/CommentCard";
import NewComment from "../userInteraction/NewComment";

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState();

  useEffect(() => {
    fetchReview(review_id).then(({ review }) => {
      setReview(review);
      if (review.comment_count > 0) {
        fetchComments(review_id).then(({ comments }) => {
          setComments(comments);
        });
      }
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="reviewBody">
        <div className="singleReviewCard">
          <SingleReviewCard review={review}></SingleReviewCard>
        </div>
      </div>
      <div className="commentArea">
        <h5>All Comments</h5>
        {comments ? (
          comments.map((comment) => {
            return (
              <div className="commentCard" key={comment.comment_id}>
                <CommentCard comment={comment} review_id={review_id} />
              </div>
            );
          })
        ) : (
          <p>This review does not have any comments!</p>
        )}
        <NewComment review_id={review.review_id} />
      </div>
    </>
  );
};

export default Review;
