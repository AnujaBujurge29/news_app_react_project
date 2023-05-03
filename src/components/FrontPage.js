import React from "react";

export default function FrontPage() {
  return (
    <div
      className="container-fluid 
      bg-dark 
      text-white
      d-flex
      justify-content-center
      align-items-center
      flex-column"
      style={{ height: "50vh" }}
    >
      <h1>News App</h1>
      <h2></h2>
      <h2></h2>
      <h5>News API is a simple HTTP REST API for searching and retrieving live articles from all over the web. </h5>
      <h5>This Website is generated by ANUJA using News API.</h5>
    </div>
  );
}
