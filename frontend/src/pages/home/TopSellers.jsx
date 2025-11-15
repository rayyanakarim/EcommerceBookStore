import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
  "Romance",
  "Mystery",
];

const TopSellers = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    //fetch top selling books from backend api
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(Books);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Category Filters */}
      <div>
        <select name="Category" id="Category">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TopSellers;
