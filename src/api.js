export const fetchReviews = () => {
  return fetch("https://boardgames-nc.herokuapp.com/api/reviews").then(
    (res) => {
      return res.json();
    }
  );
};
