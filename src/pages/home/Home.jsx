import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../component/Spinner";
import { Link } from "react-router-dom";
import BooksTable from "../../component/home/BooksTable";
import BookCard from "../../component/home/BookCard";
import homeStyle from "./home.module.css";
import AddSign from "../../image/add.png";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/book`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={homeStyle.home}>
      <div className={homeStyle.bts}>
        <button className={homeStyle.bts1} onClick={() => setShowType("table")}>
          Table
        </button>
        <button className={homeStyle.bts2} onClick={() => setShowType("card")}>
          Card
        </button>
      </div>
      <div className={homeStyle.homeHeads}>
        <h1 className={homeStyle.bookList}>Book List</h1>
        <Link to="/books/create">
          <img src={AddSign} className={homeStyle.adds} alt="addsign" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}

export default Home;
