import React from "react";

const BookCard = ({ title, author, year }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default BookCard;
