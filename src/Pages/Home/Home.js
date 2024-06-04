
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";

import "./home.css"
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://openlibrary.org/search.json?author=tolkien&sort=new"
          );
          const data = await response.json();
          setData(data.docs);
        } catch (error) {
          setError(error);
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    // console.log(data);
    const searchHandler = (search) => {
      setSearch(search);
    };
  
    const filteredData = data.filter((book) =>
      Object.values(book) //convert object into the array
        .join(" ") //This method joins all the elements of the array into a single string
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    const addToBookshelf = (e, item) => {
      e.preventDefault(); // Prevent default link behavior
      const existingBookshelf =
        JSON.parse(localStorage.getItem("bookshelf")) || [];
      const newBook = {
        title: item.title,
        author: item.author_name ? item.author_name[0] : "Unknown",
      };
      localStorage.setItem(
        "bookshelf",
        JSON.stringify([...existingBookshelf, newBook])
      );
    };
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (error) {
      return <h1>Error: {error.message}</h1>;
    }
  
    return (
      <div className="container">
        <Link to="/bookshelf"><button>Bookshelf</button></Link>
        <Search term={search} searchKeyword={searchHandler} />
  
        <div className="cardContainer">
          <ul>
            {filteredData.slice(0, 10).map((item, i) => (
              <li key={i}>
                <div className="card cardCustom">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-primary">
                      {item.author_name ? item.author_name[0] : "Unknown"}
                    </h6>
                    <a
                      href="/"
                      className="card-link btn"
                      onClick={(e) => addToBookshelf(e, item)}
                    >
                      Add to Bookshelf
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    );
}

export default Home