import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/reviews/Reviews";
import Review from "./components/reviews/Review";
import Home from "./components/Home";
import NewReview from "./components/reviews/NewReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [CurrentUser, SetCurrentUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ CurrentUser, SetCurrentUser }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/reviews/:review_id" element={<Review />}></Route>
            <Route path="/reviews/new" element={<NewReview />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
