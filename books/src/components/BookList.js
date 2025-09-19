import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books, editBookById, deleteBookById, Id } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        onEdit={editBookById}
        onDelete={deleteBookById}
        key={book.id}
        book={book}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
