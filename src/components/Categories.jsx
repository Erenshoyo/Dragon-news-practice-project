import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.value;
    if (id) navigate(`/category/${id}`);
  };

  return (
    <div>
      <h2 className="font-semibold text-center underline">
        All Categories ({categories.length})
      </h2>

      {/* ✅ MOBILE DROPDOWN */}
      <div className="mt-5 md:hidden">
        <select
          className="select select-bordered w-full"
          onChange={handleChange}
          defaultValue=""
        >
          <option disabled value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="font-medium text-accent text-center py-3 bg-base-100 border-0 hover:bg-base-200"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
