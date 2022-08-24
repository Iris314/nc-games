import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Review from "./components/Review";
import Home from "./components/Home";
import NewReview from "./components/NewReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/reviews/:review_id" element={<Review />}></Route>
          <Route path="/reviews/new" element={<NewReview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
