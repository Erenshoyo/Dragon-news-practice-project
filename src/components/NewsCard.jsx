import React from "react";
import { FaStar } from "react-icons/fa";
import { FiBookmark, FiShare2, FiEye } from "react-icons/fi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, image_url, details, others } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const shortDetails =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 w-11/12 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FiBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold mb-3">{title}</h2>

        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full object-cover mb-4"
        />

        <p className="text-gray-600">
          {shortDetails}
          {details.length > 200 && (
            <Link to={`/newsDetails/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
              Read More
            </Link>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="font-semibold">{rating.number}</span>

          {others?.is_trending && (
            <span className="badge badge-warning badge-sm ml-2">Trending</span>
          )}
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FiEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
