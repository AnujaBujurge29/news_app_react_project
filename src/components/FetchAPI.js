import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchAPI({ categories }) {
  // let currentPage=1
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setData] = useState("");
  let totalResults = 0;
  const getAPI = async () => {
    // //Sample api

    const apiKey = "45aa2b6d525a44b6ac2ecd023db0c799";
    const urlWithCat = `https://newsapi.org/v2/top-headlines?country=us&category=${categories}&page=${currentPage}&apiKey=${apiKey}`;

    const url = `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}apiKey=${apiKey}`;

    await axios.get(categories ? urlWithCat : url).then((response) => {
      let data = response.data;
      console.log(data);
      let resultData = response.data.articles;
      totalResults = data.totalResults;
      console.log(totalResults);
      setData(resultData);
    });

    // try {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data.articles);
    //   setData(data.articles);
    // } catch (error) {
    //   console.error("Error");
    // }
  };

  useEffect(() => {
    getAPI();
  }, [categories]);

  //   const checkAPI = () => {
  //     if (apiData) {
  //       getAPI();
  //     }
  //   };
  //   checkAPI();

  const handleNextClick = async () => {
    setCurrentPage(currentPage + 1);
    if (currentPage > Math.ceil(totalResults / 20)) {
      return "No new news Available";
    } else {
      console.log("next");
      getAPI();
    }
  };

  const handlePriviousClick = async () => {
    console.log("Privious");
    setCurrentPage(currentPage - 1);
  };
  return (
    <div
      className="container
    my-4"
    >
      <h3>Headlines...</h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-4"
        style={{ minHeight: "100vh" }}
      >
        {apiData
          ? apiData.map((item, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{ width: "700px", boxShadow: "2px 2px 10px black" }}
                >
                  <h5 className="my-2">{item.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      alt="Data not available.."
                      src={item.urlToImage}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="my-1">{item.content}</p>
                  <Link
                    to={item.url}
                    target="blank"
                    className="btn btn-primary"
                  >
                    View More
                  </Link>
                </div>
              </>
            ))
          : "Loading News..."}
      </div>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-dark"
          onClick={handlePriviousClick}
          disabled={currentPage <= 1}
        >
          &larr; Previous Page
        </button>
        <button className="btn btn-dark" onClick={handleNextClick}>
          Next Page &rarr;
        </button>
      </div>
    </div>
  );
}
