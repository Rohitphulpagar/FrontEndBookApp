import React, { useState } from "react";
import Spinner from "../../component/Spinner";
import BackButton from "../../component/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import deleteDesign from "./delete.module.css";
function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/book/delete/${id}`)
      .then(() => {
        setLoading(true);
        enqueueSnackbar("book deleted succesufully", { varient: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        //alert("an error happended. Please check console");
        enqueueSnackbar("error", { variant: "error" });
      });
  };
  return (
    <div className={deleteDesign.deletes}>
      {loading ? <Spinner /> : ""}
      <div className={deleteDesign.deleted}>
        <h1>Delete Book</h1>
        <h3>Are you sure want to delete this book?</h3>
        <button onClick={handleDelete}>Yes,Delete it</button>
      </div>
    </div>
  );
}

export default DeleteBook;
