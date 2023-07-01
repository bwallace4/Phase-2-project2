import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contributors" exact component={Contributors} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
