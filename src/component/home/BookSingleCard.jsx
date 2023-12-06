import React from "react";
import { Link } from "react-router-dom";
import deletes from "../../image/delete.png";
import details from "../../image/detail.png";
import edits from "../../image/edit.png";
import users from "../../image/user.png";
import books from "../../image/openbook.png";
import bookdesign from "../home/homecss/bookSingleCard.module.css";
function BookSingleCard({ book }) {
  return (
    <div className={bookdesign.cards}>
      <div className={bookdesign.sect1}>
        <h4 className={bookdesign.ids}>{book._id}</h4>
        <h2 className={bookdesign.publisher}>{book.publishYear}</h2>
      </div>
      <div className={bookdesign.bookT}>
        <img className={bookdesign.bookimg} src={books} alt="book" />
        <h2 className={bookdesign.titles}>{book.title}</h2>
      </div>
      <div className={bookdesign.users}>
        <img className={bookdesign.userimg} src={users} alt="users" />
        <h2 className={bookdesign.authors}>{book.author}</h2>
      </div>
      <div className={bookdesign.options}>
        <Link to={`/books/details/${book._id}`}>
          <img className={bookdesign.bookDetails} src={details} alt="detail" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <img className={bookdesign.bookedit} src={edits} alt="edit" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <img className={bookdesign.bookdelete} src={deletes} alt="delete" />
        </Link>
      </div>
    </div>
  );
}

export default BookSingleCard;
