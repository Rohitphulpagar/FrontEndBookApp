import React, { useState } from "react";
import BackButton from "../../component/BackButton";
import Spinner from "../../component/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";
import createDesign from "./create.module.css";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/book/create`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("book created successuflully", { varient: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("an error happended. please check console");
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  return (
    <div>
      <BackButton />
      <h1>Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className={createDesign.creForm}>
        <div className={createDesign.boox}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Author</label>
            <br />
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
          <button onClick={handleSaveBook}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
