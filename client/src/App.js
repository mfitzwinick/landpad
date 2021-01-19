import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
import Posts from "./pages/Posts/Posts";
import Data from "./pages/Data";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/financial" component={Financial} />
            <Route exact path="/vision-board" component={VisionBoard} />
            <Route exact path="/data" component={Data} />
      </Router>
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
