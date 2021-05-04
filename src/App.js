import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addBook } from "./actions";

const App = () => {
  const booksData = useSelector((state) => state.booksData);
  const dispatch = useDispatch();
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);

  const handleAddBook = () => {
    dispatch(
      addBook({
        title: bookTitle.current.value,
        author: bookAuthor.current.value,
      })
    );
    bookTitle.current.value = "";
    bookAuthor.current.value = "";
  };

  return (
    <div className="container-outer">
      <h2>APP</h2>
      {booksData.map((book, index) => (
        <div className="container-inner" key={index}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}
      <label>Title:</label>
      <input type="text" ref={bookTitle} />
      <br />
      <label>Author:</label>
      <input type="text" ref={bookAuthor} />
      <br />
      <button onClick={handleAddBook}>Add A Book</button>
    </div>
  );
};

export default App;
