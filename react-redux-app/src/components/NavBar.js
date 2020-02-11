import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to = '/books'>Books</Link>
      </nav>
    </div>
  );
}
