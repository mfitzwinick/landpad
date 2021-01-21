import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
import Posts from "./pages/Posts";
import Resources from "./pages/Resources";
import Modal from "./pages/Modal";
import Landing from './components/Landing';

function App() {
  return (

    <div>
      <h1>testing</h1>
      <Router>
         <div className="page-container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/finances" component={Financial} />
          <Route exact path="/vision-board" component={VisionBoard} />
          <Route exact path="/learn" component={Resources} />
        </div>
      </Router>
      </div>
  );
}


export default App;
