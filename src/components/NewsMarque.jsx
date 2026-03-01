import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const NewsMarque = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("/marqueeNews.json")
      .then((res) => res.json())
      .then((data) => setHeadlines(data.headlines));
  }, []);
  return (
    <div className="flex items-center bg-base-200 gap-5 p-3 rounded-md">
      <p className="text-base-100 bg-secondary px-3 py-2 rounded-md">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={85}>
        {headlines.map((headline, index) => (
          <p key={index} className="font-semibold">
            {headline} <span className="px-2">|</span>
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsMarque;
