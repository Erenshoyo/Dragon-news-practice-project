import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="w-11/12 mx-auto">
      <header className="mt-12">
        <Header></Header>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <section className="col-span-1 lg:col-span-9">
          <h2 className="font-semibold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-1 lg:col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
