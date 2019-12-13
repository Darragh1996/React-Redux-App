import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import BooksList from './components/BooksList'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BooksList} />
        </header>
      </div>
    </Router>
  );
}

export default App;
