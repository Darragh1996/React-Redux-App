import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooks } from "../state/actionCreators";
import { booksReducer } from "../state/reducers";
import Book from "./Book";

export function Display({ books, getBooks }) {
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  return <div>
      {
          books.map(book => {
              return <Book book={book} />
          })
      }
  </div>;
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, { getBooks })(Display);
