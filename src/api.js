export const fetchReviews = (category) => {
  return category
    ? fetch(
        `https://boardgames-nc.herokuapp.com/api/reviews?category=${category}`
      ).then((res) => {
        return res.json();
      })
    : fetch("https://boardgames-nc.herokuapp.com/api/reviews").then((res) => {
        return res.json();
      });
};

export const fetchCategories = () => {
  return fetch("https://boardgames-nc.herokuapp.com/api/categories").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchReview = (review_id) => {
  return fetch(
    `https://boardgames-nc.herokuapp.com/api/reviews/${review_id}`
  ).then((res) => {
    return res.json();
  });
};

export const fetchComments = (review_id) => {
  return fetch(
    `https://boardgames-nc.herokuapp.com/api/reviews/${review_id}/comments`
  ).then((res) => {
    return res.json();
  });
};

export const patchCommentVotes = (comment_id, votes) => {
  return fetch(
    `https://boardgames-nc.herokuapp.com/api/comments/${comment_id}`,
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
  return fetch(`https://boardgames-nc.herokuapp.com/api/reviews/${review_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes: votes }),
  }).then((res) => {
    return res.json();
  });
};

export const postComment = ({ comment }, review_id) => {
  return fetch(
    `https://boardgames-nc.herokuapp.com/api/reviews/${review_id}/comments`,
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

export const deleteComment = (comment_id) => {
  return fetch(
    `https://boardgames-nc.herokuapp.com/api/comments/${comment_id}`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    return res;
  });
};
