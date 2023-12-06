import { Route, Routes } from "react-router-dom";
import CreateBook from "../src/pages/create/CreateBook";
import DeleteBook from "../src/pages/delete/DeleteBook";
import EditBook from "../src/pages/edit/EditBook";
import ShowBook from "../src/pages/showbook/ShowBook";
import Home from "../src/pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
