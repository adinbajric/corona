import React, { useEffect, useState } from "react";
import "./News.css";
import Article from "./Article";
import Loading from "../loading/Loading";
import Subscribe from "./Subscribe";

function News({ fetchedNews }) {
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (fetchedNews.length === 0) {
    return <Loading />;
  }

  return (
    <div className="news">
      <h1 className="title__big blog__heading">Our Blog</h1>
      {fetchedNews.slice(0, 2).map((item, i) => {
        return <Article key={i} {...item} />;
      })}
      <Subscribe />
      {fetchedNews.slice(3, visible).map((item, i) => {
        return <Article key={i} {...item} />;
      })}
      <button className="btn btn__news" onClick={showMoreItems}>
        Load More
      </button>
    </div>
  );
}

export default News;
