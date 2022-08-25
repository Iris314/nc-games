import { useEffect, useState } from "react";
import { fetchReviews } from "../../api";
import TopReview from "./TopReview";
import RecentReview from "./RecentReview";
import { Link } from "react-router-dom";

const Home = () => {
  const [topReview, setTopReview] = useState([]);
  const [recReview, setRecReview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewNo, setReviewNo] = useState();

  useEffect(() => {
    fetchReviews("sort_by=comment_count").then(({ reviews }) => {
      setTopReview(reviews[0]);
    });
    fetchReviews().then(({ reviews }) => {
      setRecReview(reviews[0]);
      const revNoArr = Object.values(reviews.map((review) => review.review_id));
      setReviewNo(() => {
        return revNoArr[Math.floor(Math.random() * revNoArr.length)];
      });
    });

    setIsLoading(false);
  }, []);

  // const randomReview = () => {
  //   return reviewNo[Math.floor(Math.random() * reviewNo.length)];
  // };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="h">
      <div className="reviewBody">
        <div className="reviewCard">
          <TopReview review={topReview} />
        </div>
        <div className="reviewCard">
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
