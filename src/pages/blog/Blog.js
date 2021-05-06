import React, { useEffect, useState } from "react";
import News from "../../Components/blog/News";
import { fetchNews } from "../../api/Api";
import "./Blog.css";

function Blog() {
  const [fetchedNews, setFetchedNews] = useState([]);

  useEffect(() => {
    const callFetchNews = async () => {
      setFetchedNews(await fetchNews());
    };
    callFetchNews();
  }, []);

  return (
    <div className="blog">
      <News setFetchedNews={setFetchedNews} fetchedNews={fetchedNews} />
    </div>
  );
}

export default Blog;
