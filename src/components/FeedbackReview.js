import { useState, useEffect } from "react";
import { patchReviewVotes } from "../api";

const FeedbackReview = ({ review }) => {
  const [changedVotes, setChangedVotes] = useState(0);
  const [votedPos, setVotedPos] = useState(false);
  const [votedNeg, setVotedNeg] = useState(false);
  const [error, setError] = useState(null);

  const changeVote = (votes) => {
    setChangedVotes(
      votedPos ? (votes > 0 ? -1 : -2) : votedNeg ? (votes < 0 ? 1 : 2) : votes
    );

    setVotedPos(votes > 0 ? !votedPos : votedPos ? !votedPos : votedPos);
    setVotedNeg(votes < 0 ? !votedNeg : votedNeg ? !votedNeg : votedNeg);
  };

  useEffect(() => {
    patchReviewVotes(review.review_id, changedVotes).catch((err) => {
      setError({ err });
    });
  }, [changedVotes, review.review_id]);

  return (
    <span className="feedback">
      <span className="voting">
        <button
          className={votedNeg ? "neg voted" : "neg"}
          onClick={() => changeVote(-1)}>
          &#10060;
        </button>
        <button
          className={votedPos ? "pos voted" : "pos"}
          onClick={() => changeVote(1)}>
          &#x2705;
        </button>
      </span>
      <p className="voteRevCounter">
        votes: {review.votes + (votedPos ? 1 : votedNeg ? -1 : 0)}
      </p>
      <p className={error === null ? "none" : "error"}>Error: try again</p>
    </span>
  );
};

export default FeedbackReview;
