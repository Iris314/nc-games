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
