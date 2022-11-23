export const fetchReviews = (params) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/reviews?${params}`
  ).then((res) => {
    return res.status !== 200 ? Promise.reject(res) : res.json();
  });
};

export const fetchUsers = () => {
  return fetch(`https://nervous-windbreaker-wasp.cyclic.app/api/users`).then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchCategories = () => {
  return fetch(
    "https://nervous-windbreaker-wasp.cyclic.app/api/categories"
  ).then((res) => {
    return res.json();
  });
};

export const fetchReview = (review_id) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/reviews/${review_id}`
  ).then((res) => {
    return res.status === 404 ? Promise.reject(res) : res.json();
  });
};

export const fetchComments = (review_id) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/reviews/${review_id}/comments`
  ).then((res) => {
    return res.json();
  });
};

export const patchCommentVotes = (comment_id, votes) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/comments/${comment_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: votes }),
    }
  ).then((res) => {
    return res.json();
  });
};

export const patchReviewVotes = (review_id, votes) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/reviews/${review_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: votes }),
    }
  ).then((res) => {
    return res.json();
  });
};

export const postComment = ({ comment }, review_id) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/reviews/${review_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: comment.username, body: comment.body }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const postReview = ({ review }) => {
  return fetch(`https://nervous-windbreaker-wasp.cyclic.app/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      owner: review.owner,
      title: review.title,
      review_body: review.review_body,
      designer: review.designer,
      category: review.category,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const deleteComment = (comment_id) => {
  return fetch(
    `https://nervous-windbreaker-wasp.cyclic.app/api/comments/${comment_id}`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    return res;
  });
};
