import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";

function App() {
  const [news, setNews] = useState();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=6955673cc5b14b7f88468d5bf01c7f63

    `)
      .then((Response) => Response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  // 2nd api request for searchText

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult]=useState(null)
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?q=${searchText}&apiKey=6955673cc5b14b7f88468d5bf01c7f63
`)
      .then((Response) => Response.json())
      .then((data) => {
        setSearchResult(data.articles)
      });
  }, [searchText]);
  // console.log(searchResult)

  return (
    <>
      <Router>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route exact path="/search" element={<SearchResults searchResult={searchResult}/>} />
          <Route
            exact
            path="/"
            element={<Homepage news={news} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
