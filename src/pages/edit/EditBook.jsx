import React, { useEffect, useState } from "react";
import Spinner from "../../component/Spinner";
import BackButton from "../../component/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from "notistack";
import editdesign from "./editbook.module.css";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/book/details/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("An error happened. Please check console");
      });
  }, [id]);
  const handleUpdate = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/book/edit/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successufully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        //alert("An error happened. Please check console.");
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <div>
      <BackButton />
      <h1>Edit Book</h1>
      {loading ? <Spinner /> : " "}
      <div className={editdesign.editForm}>
        <div className={editdesign.editboox}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Publish Year</label>
            <br />
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <br />
          <button onClick={handleUpdate}>update</button>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
