import React from 'react';
import "../styling/Gallery.css";
import Michelle from "../images/michelleOk.jpg";
import Yess from "../images/yessOk.jpg";
import Jessica from "../images/jessOk.jpg";
import Angelo from "../images/angeloOk.jpg";


const Gallery = props => {
    return (
      <div className="card text-center">
        <div className="overflow">
          <br></br>
          <img className="pic" src={Michelle} alt="Michelle" style={{width: '50%'}}/>        
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Michele Fitzgerald-Winick</h4>
          <p className="card-text text-secondary">
          Having worked in the real estate industry for developers, buyers and sellers for almost two decades,
          I was excited about the prospect of bringing together a community of like-minded, creative people who
          understand that home is truly where the heart is. As a mother of two children, my ideal home is a place
          where family can gather, work and play. I was honored to be recognized by the National Association of
          Home Builders for work on a high rise conversion project focused on cutting edge modern designs; however
          I have always loved a home with a good story behind it. Southern California has a rich combination of old
          and new architecture, which is a constant source of inspiration. It is also the perfect place to blend an established storied industry (real estate) with technology.
          </p>
          {/*<a href="https://mfitzwinick.github.io/portfolio-inReact/" className="btn btn-outline-success">Portfolio</a>
          <br></br>
          <br></br>
          <a href="https://github.com/mfitzwinick" className="btn btn-outline-success">GiHub</a>
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/michele-fitzgerald-winick-1a2112b/" className="btn btn-outline-success">LinkedIn</a>
          <br></br>
          <br></br> */}
          <hr></hr>
        </div>
        <div className="overflow">
          <br></br>
          <img className="pic" src={Yess} alt="Michelle" style={{width: '50%'}}/>       
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Yess Samuels</h4>
          <p className="card-text text-secondary">
          With over a decade of design experience, I began my career in New York City as a Graphic Designer for TWELV Magazine, 
          where I developed my skills of managing multiple projects in a fast-paced environment. My talent, and drive repelled me to Visual Editor where 
          I was able to develop my unique editorial style.Upon my return back to Los Angeles, my focus has been Real Estate Marketing and by using the knowledge 
          I’ve obtained from my past experience, as well as utilizing my degree in Interior Architecture and Graphic Design, I’ve developed a unique and creative style 
          that mends both worlds together in a sophisticated blend and have been showcased for multiple top companies in the Real Estate industry.
          </p>
          {/*<a href="https://www.yessdesignmarketing.com/" className="btn btn-outline-success">Portfolio</a>
          <br></br>
          <br></br>
          <a href="https://github.com/yessSamuels" className="btn btn-outline-success">GiHub</a>
          <br></br>
          <br></br>
          <a href="#" className="btn btn-outline-success">LinkedIn</a>
          <br></br>
          <br></br>*/}
          <hr></hr>
        </div>
        <div className="overflow">
          <br></br>
          <img className="pic" src={Jessica} alt="Michelle" style={{width: '50%'}}/>        
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Jessica Crump</h4>
          <p className="card-text text-secondary">
          Hi! I'm Jessica and I live in Denver, CO. I enjoy all things outdoors, cooking, and traveling. Before the pandemic, I was living in Ecuador, 
          teaching English with the Peace Corps. I have a degree in Psychology with minors in biology, chemistry, and Spanish and now I'm learning to code! My dream home 
          has tons of natural light, hence my choice in a home featuring more windows than walls. I love modern architecture with open floor plans, crisp, clean looks, 
          and monochromatic color palettes. With my love for nature, my home is ideally surrounded by wildlife and flora but also a short drive from a Whole Foods.
          </p>
          {/* <a href="https://immense-lake-19917.herokuapp.com/" className="btn btn-outline-success">Portfolio</a>
          <br></br>
          <br></br>
          <a href="https://github.com/Jesscru" className="btn btn-outline-success">GiHub</a>
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/jessicacrump7/" className="btn btn-outline-success">LinkedIn</a>
          <br></br>
    <br></br> */}
          <hr></hr>
        </div>
        <div className="overflow">
          <br></br>
          <img className="pic" src={Angelo} alt="Michelle" style={{width: '50%'}}/>       
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Angelo Rocky Dibello</h4>
          <p className="card-text text-secondary">
          Hi there, I'm Angelo Rocky Dibello and I've been a computer lover since I can remember. Starting from a passion for videogames I've seen through 
          my eyes the incredible evolution of the "species" like Charles Darwin would probably say. I've owned Atari, Commodore 64, Nintendo, Amiga 500, Pc and Mac. I've purchased 
          my first computer because my major course of study was Computers, Circuit Boards, CPU, Telecommunication Arts and Technology in Monopoli (BA), South Italy. I've graduated in 1999. 
          After that I've decide to pursue a Music career and I've earned my Music Performance Major in Milan, Italy in 2004. I am an up and coming web developer, currently in the UCLA Extension 
          Full-Stack Web Development Coding Bootcamp (2020/21).
          </p>
          {/*<a href="https://pure-plateau-50431.herokuapp.com/" className="btn btn-outline-success">Portfolio</a>
          <br></br>
          <br></br>
          <a href="https://github.com/Dibello80" className="btn btn-outline-success">GiHub</a>
          <br></br>
          <br></br>
          <a href="https://www.linkedin.com/in/angelodibello" className="btn btn-outline-success">LinkedIn</a>
          <br></br>
          <br></br>*/}
          <hr></hr>
        </div>
        
      </div>
    

  );

}
    
       
    
        

export default Gallery;