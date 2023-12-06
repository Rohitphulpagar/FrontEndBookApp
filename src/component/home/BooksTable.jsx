import React from "react";
import { Link } from "react-router-dom";
import tableDesign from "./homecss/booktable.module.css";
import add from "../../image/add.png";
import deletes from "../../image/delete.png";
import details from "../../image/detail.png";
import edits from "../../image/edit.png";
function BooksTable({ books }) {
  return (
    <table className={tableDesign.tableStart}>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Year</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publishYear}</td>
            <td>
              <div className={tableDesign.specification}>
                <Link to={`/books/details/${book._id}`}>
                  <img
                    className={tableDesign.edits}
                    src={details}
                    alt="edit"
                  ></img>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <img
                    className={tableDesign.edit}
                    src={edits}
                    alt="edit"
                  ></img>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  {" "}
                  <img
                    className={tableDesign.deletes}
                    src={deletes}
                    alt="edit"
                  ></img>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
