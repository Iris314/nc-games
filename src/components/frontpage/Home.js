import { useEffect, useState } from "react";
import { fetchReviews } from "../../api";
import TopReview from "./TopReview";
import RecentReview from "./RecentReview";
import { Link } from "react-router-dom";

const Home = () => {
  const [topReview, setTopReview] = useState([]);
  const [recReview, setRecReview] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewNo, setReviewNo] = useState();

  useEffect(() => {
    fetchReviews("sort_by=votes").then(({ reviews }) => {
      setTopReview(reviews[0]);
    });
    fetchReviews().then(({ reviews }) => {
      setRecReview(reviews[0]);
      const revNoArr = Object.values(reviews.map((review) => review.review_id));
      setReviewNo(() => {
        return revNoArr[Math.floor(Math.random() * revNoArr.length)];
      });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="homePage">
      <div className="reviewBody">
        <div
          className="reviewCard"
          style={{
            backgroundImage: `url(${topReview.review_img_url})`,
            backgroundSize: "cover",
          }}>
          <TopReview review={topReview} />
        </div>
        <div
          className="reviewCard"
          style={{
            backgroundImage: `url(${recReview.review_img_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <RecentReview review={recReview} />
        </div>
      </div>
      <Link to={`/reviews/${reviewNo}`} className="randomReview">
        Random Review
      </Link>
    </div>
  );
};

export default Home;
