import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-8">
      <img
        className="w-full h-fit object-cover"
        src={news.image_url}
        alt={news.title}
      />
      <h2 className="text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <div className="flex justify-start items-center gap-3">
          <IoIosArrowBack></IoIosArrowBack>Go back to category
        </div>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
