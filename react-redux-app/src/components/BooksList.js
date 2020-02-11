import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooks } from "../state/actionCreators";
import Book from "./Book";

export function BooksList({ books, getBooks }) {
  // debugger;
  console.log("books: ", books, "getBooks: ", getBooks);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      {books.map(book => {
        return <Book book={book} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  // debugger;
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, { getBooks })(BooksList);
