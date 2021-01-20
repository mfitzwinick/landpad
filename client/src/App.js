import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/LogIn';
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
import Posts from "./pages/Posts";
import Data from "./pages/Data";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Modal from "./pages/Modal";

function App() {
  return (
      <Router>
         <div className="page-container">
          <Navigation />
        
          <Route exact path="/" component={Login} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/finances" component={Financial} />
          <Route exact path="/vision-board" component={VisionBoard} />
          <Route exact path="/learn" component={Data} />
        
          <Footer />
        </div>

      </Router>
   
  );
}

export default App;
