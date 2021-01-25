import React from 'react';
import Michelle from "../images/michelle-profile.jpg";
import Yess from "../images/yess-profile.jpg";
import Jessica from "../images/jess-profile.jpg";
import Angelo from "../images/angelo-profile.jpg";

function Gallery (){
    return (
        <div>
    <div className="col-md-4">
    <div className="thumbnail">
       <img src={Michelle} alt="Michelle" style={{width: '100%'}} />
        <div className="caption">
          <p>Michelle</p>
        </div>
       </div>
  </div>
  <div className="col-md-4">
    <div className="thumbnail">
       <img src={Yess} alt="Yess" style={{width: '100%'}} />
        <div className="caption">
          <p>Yess</p>
        </div>
     
    </div>
  </div>
  <div className="col-md-4">
    <div className="thumbnail">
       <img src={Jessica} alt="Jessica" style={{width: '100%'}} />
        <div className="caption">
          <p>Jessica</p>
        </div>
      </div>
  </div>
  <div className="col-md-4">
    <div className="thumbnail">
      <img src={Angelo} alt="Angelo" style={{width: '100%'}} />
        <div className="caption">
          <p>Angelo</p>
        </div>
     
    </div>
  </div>
        </div>
    )
    
}
    
        

export default Gallery;