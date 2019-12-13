import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBooks } from "../state/actionCreators";
import { booksReducer } from "../state/reducers";
import Book from "./Book";
import { BooksList } from "./BooksList";
import { Route } from "react-router-dom";

//rRq2_y6LKUNWQcjIPRo-

export default function Display() {
  //   useEffect(() => {
  //     getBooks();
  //   }, []);
  //   console.log(books);
  //   return (
  //     <div>
  //       {books.map(book => {
  //         return <Book book={book} />;
  //       })}
  //     </div>
  //   );
//   return <Route path="/books" component={BooksList} />;
return (
    <div>
        <h1>Welcome to the LOTR site.</h1>
    </div>
)
}

// function mapStateToProps(state) {
//   return {
//     books: state.books
//   };
// }

// export default connect(mapStateToProps, { getBooks })(Display);
