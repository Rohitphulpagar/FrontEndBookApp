import React from "react";
import { Link } from "react-router-dom";
import BookSingleCard from "./BookSingleCard";
function BookCard({ books }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
}

export default BookCard;
