import { useState, useEffect } from "react";
import { patchCommentVotes } from "../api";

const FeedbackComment = ({ comment }) => {
  const [changedVotes, setChangedVotes] = useState(0);
  const [votedPos, setVotedPos] = useState(false);
  const [votedNeg, setVotedNeg] = useState(false);

  const changeVote = (votes) => {
    setChangedVotes(
      votedPos ? (votes > 0 ? -1 : -2) : votedNeg ? (votes < 0 ? 1 : 2) : votes
    );

    setVotedPos(votes > 0 ? !votedPos : votedPos ? !votedPos : votedPos);
    setVotedNeg(votes < 0 ? !votedNeg : votedNeg ? !votedNeg : votedNeg);
  };

  useEffect(() => {
    patchCommentVotes(comment.comment_id, changedVotes).then();
  }, [changedVotes, comment.comment_id]);

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
      <p>votes: {comment.votes + (votedPos ? 1 : votedNeg ? -1 : 0)}</p>
    </span>
  );
};

export default FeedbackComment;
