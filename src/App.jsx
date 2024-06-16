import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import requests from "./Requests";
import NavBar from "./components/NavBar";
import Tvshow from "./components/Tvshow";
import SearchBar from "./components/Searchbar";
import SearchResult from "./components/SearchResult";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const location = useLocation();
  const isSignupOrMovieDetailPageOrLogin = location.pathname === "/signup" ||location.pathname === "/login" || location.pathname.startsWith("/movie/");

  return (
    <>
      <div className="flex h-screen bg-[#10141E]">
        {!isSignupOrMovieDetailPageOrLogin && <NavBar />}
        <div className="flex-1 overflow-auto p-4">
          {!isSignupOrMovieDetailPageOrLogin && <SearchBar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route
              path="/movies"
              element={
                <Movie title="Movies" fetchURL={requests.requestTopRated} />
              }
            />
            <Route
              path="/tvshow"
              element={
                <Tvshow
                  title="Explore TV Shows"
                  fetchURL={requests.requestUpcoming}
                />
              }
            />
            <Route path="/all/search/:searchQuery" element={<SearchResult />} />
            <Route path="/movie/search/:searchQuery" element={<SearchResult />} />
            <Route path="/tv/search/:searchQuery" element={<SearchResult />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
