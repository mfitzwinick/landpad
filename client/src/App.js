import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import VisionBoard from "./pages/VisionBoard";
import Plan from "./pages/Plan";
import Share from "./pages/Share";
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
          <ProtectedRoute exact path="/share" component={Share} />
          <ProtectedRoute exact path="/plan" component={Plan} />
          <ProtectedRoute exact path="/vision-board" component={VisionBoard} />
          <ProtectedRoute exact path="/learn" component={Resources} />
        </div>
      </Router>
      </div>
  );
}


export default App;
