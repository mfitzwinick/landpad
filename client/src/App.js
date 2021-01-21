import './styling/App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VisionBoard from "./pages/VisionBoard";
<<<<<<< HEAD
import Plan from "./pages/Plan";
import Posts from "./pages/Posts";
=======
import Financial from "./pages/Financial";
import Share from "./pages/Share";
>>>>>>> 674670318dc78223c009a2da0b8cbe57c04488e8
import Resources from "./pages/Resources";
import Modal from "./pages/Modal";
import Landing from './components/Landing';

function App() {
  return (
      <Router>
         <div className="page-container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/modal" component={Modal} />
<<<<<<< HEAD
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/finances" component={Plan} />
=======
          <Route exact path="/share" component={Share} />
          <Route exact path="/plan" component={Financial} />
>>>>>>> 674670318dc78223c009a2da0b8cbe57c04488e8
          <Route exact path="/vision-board" component={VisionBoard} />
          <Route exact path="/learn" component={Resources} />
        </div>
      </Router>
  );
}


export default App;
