import React from "react";
import { Link } from "react-router-dom";
import "./bookshelf.css"
const Bookshelf = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div className="container">
        
      <h2>My Bookshelf</h2>
      <Link className="back-btn" to="/">Back👈</Link>
      <div className="cardContainer">

     
      <ul>
        {bookshelf.map((book, index) => (
          <li key={index}>
            <div className="card cardCustom">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-primary">{book.author}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
