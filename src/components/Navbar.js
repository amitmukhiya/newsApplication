import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

export default function Navbar(props) {
  const text = (e) => {
    props.setSearchText(e.target.value);
  };
  const [news, setNews] = useState();
  const [word, setWord] = useState();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${word}&apiKey=6955673cc5b14b7f88468d5bf01c7f63

    `)
      .then((Response) => Response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, [word]);
  // console.log(news);

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              News Space
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="business"
                    className="nav-link active"
                    onClick={() => {
                      setWord("business");
                    }}
                  >
                    {/* business entertainment general health science sports technology */}
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="entertainment"
                    className="nav-link active"
                    onClick={() => {
                      setWord("entertainment");
                    }}
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="general"
                    className="nav-link active"
                    onClick={() => {
                      setWord("general");
                    }}
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="health"
                    className="nav-link active"
              
                    onClick={() => {
                      setWord("health");
                    }}
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="science"
                    className="nav-link active"
              
                    onClick={() => {
                      setWord("science");
                    }}
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sports"
                    className="nav-link active"
                    onClick={() => {
                      setWord("sports");
                    }}
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/technology"
                    className="nav-link active"
                    
                    onClick={() => {
                      setWord("technology");
                    }}
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={props.searchText}
                  onChange={text}
                />
                <Link to="/search"
                  className="btn btn-outline-success text-light"
                  type="submit"
                >
                  Search
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Home news={news} />
    </>
  );
}
