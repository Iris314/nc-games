const Home = () => {
  return (
    <div className="h">
      <div className="reviewBody">
        <div className="reviewCard">
          <h5>Top Review</h5>
        </div>
        <div className="reviewCard">
          <h5>Most recent Review</h5>
        </div>
        <div className="reviewCard">
          <h5>Top Comment</h5>
        </div>
        <div className="reviewCard">
          <h5>Most Recent Comment</h5>
        </div>
      </div>
      <button className="randomReview">Random Review</button>
    </div>
  );
};

export default Home;
