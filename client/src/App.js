import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from './pages/LogIn';
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
// import Posts from "./pages/Posts";
import Data from "./pages/Data";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import UserPost from './components/UserPost';

function App() {
  return (
    <div>
      <Navigation />
      <UserPost />
      <Router>
        <Route exact path="/" component={Modal} />
        {/* <Route exact path="/posts" component={Posts} /> */}
        <Route exact path="/financial" component={Financial} />
        <Route exact path="/vision-board" component={VisionBoard} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/modal" component={Modal} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
