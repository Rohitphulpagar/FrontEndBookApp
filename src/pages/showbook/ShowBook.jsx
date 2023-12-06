import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import Spinner from "../../component/Spinner";
import axios from "axios";
import showdesign from "./showbook.module.css";
function ShowBook() {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/book/details/${id}`)
      .then((response) => {
        console.log("Type of API response:", typeof response.data);
        console.log("API response:", response.data);
        setBooks([response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <BackButton />
      <h1>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className={showdesign.detailsBook}>
          {book.map((books, index) => (
            <div className={showdesign.detailsBook1} key={books._id}>
              <div>
                <label>
                  Id : <span>{books._id}</span>
                </label>
              </div>
              <div>
                <label>
                  Title : <span>{books.title}</span>
                </label>
              </div>
              <div>
                <label>
                  Author : <span>{books.author}</span>
                </label>
              </div>
              <div>
                <label>
                  Publish Year : <span>{books.publishYear}</span>
                </label>
              </div>
              <div>
                <label>
                  Create Time :{" "}
                  <span>{new Date(books.createdAt).toLocaleString()}</span>
                </label>
              </div>
              <div>
                <label>
                  Last Update Time :{" "}
                  <span>{new Date(books.updatedAt).toLocaleString()}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowBook;
