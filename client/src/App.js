import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ProtectedRoute from './components/ProtectedRoute';
import VisionBoard from "./pages/VisionBoard";
import Plan from "./pages/Plan";
import Share from "./pages/Share";
import Resources from "./pages/Resources";
import Modal from "./pages/Modal";
import Landing from './components/Landing';
import Team from './pages/Team';

import UploadWidget from './components/UploadWidget'

function App() {
  return (

    <div>
      <Router>
        <div className="page-container">

          <Route exact path="/" component={Landing} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/vision-board" component={VisionBoard} />
          <Route exact path="/learn" component={Resources} />
          <Route exact path="/team" component={Team} />    
          <Route exact path="/upload" component={UploadWidget} />


        </div>
      </Router>
    </div>
  );
}


export default App;
