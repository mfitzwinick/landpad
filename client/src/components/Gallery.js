import React from 'react';
import "../styling/Gallery.css";
import Michelle from "../images/michelleOk.jpg";
import Yess from "../images/yessOk.jpg";
import Jessica from "../images/jessOk.jpg";
import Angelo from "../images/angeloOk.jpg";

function Gallery (){
    return (
        <div>
          <div className="col-md-4">
          <div className="thumbnail">
          <h1><bold>Michele Fitzgerald-Winick </bold></h1>
          <img src={Michelle} alt="Michelle" style={{width: '100%'}} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <div className="caption">
          </div>
          </div>
       </div>
       <hr></hr>
  <div className="col-md-4">
    <div className="thumbnail">
    <h1><bold>Yess Samuels</bold></h1>
       <img src={Yess} alt="Yess" style={{width: '100%'}} />
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       
        <div className="caption">
        </div>
     </div>
  </div>
  <hr></hr>
  <div className="col-md-4">
    <div className="thumbnail">
    <h1><bold>Jessica Crump</bold></h1>
       <img src={Jessica} alt="Jessica" style={{width: '100%'}} />
       <p>Jessica lives in Denver, CO. She enjoys all things outdoors, cooking, and traveling. Before the pandemic, she was living in Ecuador, teaching English with the Peace Corps. She has a degree in Psychology with minors in biology, chemistry, and Spanish and now she's learning to code! Her dream home has tons of natural light, hence her choice in a home featuring more windows than walls. She loves modern architecture with open floor plans, crisp, clean looks, and monochromatic color palettes. With her love for nature, her home is ideally surrounded by wildlife and flora but also a short drive from a Whole Foods.</p>
        <div className="caption">
        </div>
      </div>
  </div>
  <hr></hr>
  <div className="col-md-4">
    <div className="thumbnail">
    <h1><bold>Angelo Rocky Dibello</bold></h1>
      <img src={Angelo} alt="Angelo" style={{width: '100%'}} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="caption">
        </div>
      </div>
  </div>
  <hr></hr>
</div>
    )
    
}
    
        

export default Gallery;