import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/LogIn';
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
import Modal from "./pages/Modal";

import Data from "./pages/Data";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Route exact path="/" component={Modal} />
        {/* <Route exact path="/posts" component={Posts} /> */}
        <Route exact path="/financial" component={Financial} />
        <Route exact path="/vision-board" component={VisionBoard} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/modal" component={Modal} />
      </Router>
    </div>
  );
}

export default App;
