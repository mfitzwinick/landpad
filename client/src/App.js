import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VisionBoard from "./pages/VisionBoard";
import Financial from "./pages/Financial";
import Share from "./pages/Share";
import Resources from "./pages/Resources";
import Modal from "./pages/Modal";
import Landing from './components/Landing';

function App() {
  return (
      <Router>
         <div className="page-container">
          {/* {UserLogin ? null : <Navigation />} */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/finances" component={Financial} />
          <Route exact path="/vision-board" component={VisionBoard} />
          <Route exact path="/learn" component={Resources} />
        </div>
      </Router>
  );
}


export default App;
