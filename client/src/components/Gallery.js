import React from 'react';
import "../styling/Gallery.css";
import Michelle from "../images/michelleOk.jpg";
import Yess from "../images/yessOk.jpg";
import Jessica from "../images/jessOk.jpg";
import Angelo from "../images/angeloOk.jpg";

function Gallery (){
    return (
        <div className="main-card">
          <div><div class="card-body">
    <h1 class="card-title">Michele Fitzgerald-Winick</h1>
    <img src={Michelle} alt="Michelle" style={{width: '36%'}} />
    <br></br>
    <br></br>
    <p class="card-text">Having worked in the real estate industry for developers, buyers and sellers for almost two decades,<br></br> I was excited about the prospect of bringing together
          a community of like-minded, creative people<br></br>who understand that home is truly where the heart is. As a mother of two children, my ideal home is<br></br> a place where family can gather, 
          work and play. I was honored to be recognized by the National Association<br></br>of Home Builders for work on a high rise conversion project focused on cutting edge modern designs; <br></br>however, 
          I have always loved a home with a good story behind it. Southern California has a rich combination<br></br> of old and new architecture, which is a constant source of inspiration.</p>
    <a href="#" class="btn btn-primary">Portfolio</a> <a href="#" class="btn btn-primary">Github</a> <a href="#" class="btn btn-primary">LinkedIn</a>
  </div></div>
  <hr></hr>
  <div><div class="card-body">
    <h1 class="card-title">Yess Samuels</h1>
    <img src={Yess} alt="Michelle" style={{width: '36%'}} />
    <br></br>
    <br></br>
    <p class="card-text">With over a decade of design experience, I began my career in New York City as a Graphic Designer<br></br> for TWELV Magazine, 
       where I developed my skills of managing multiple projects in a fast-paced environment.<br></br>My talent and drive repelled me to Visual Editor where 
       I was able to develop my unique editorial style.<br></br>Upon my return back to Los Angeles, my focus has been Real Estate Marketing and by using the knowledge<br></br> 
       I’ve obtained from my past experience, as well as utilizing my degree in Interior Architecture and Graphic Design,<br></br> I’ve developed a unique and creative style 
       that mends both worlds together in a sophisticated blend and have been<br></br> showcased for multiple top companies in the Real Estate industry.</p>
       <a href="#" class="btn btn-primary">Portfolio</a> <a href="#" class="btn btn-primary">Github</a> <a href="#" class="btn btn-primary">LinkedIn</a>
  </div></div>
   <hr></hr>
   <div><div class="card-body">
    <h1 class="card-title">Jessica Crump</h1>
    <img src={Jessica} alt="Michelle" style={{width: '36%'}} />
    <br></br>
    <br></br>
    <p class="card-text">Hi! I'm Jessica and I live in Denver, CO. I enjoy all things outdoors, cooking, and traveling.<br></br> Before the pandemic, I was living in Ecuador, 
       teaching English with the Peace Corps. I have a degree<br></br>in Psychology with minors in biology, chemistry, and Spanish and now I'm learning to code! <br></br> My dream home 
       has tons of natural light, hence my choice in a home featuring more windows than walls.<br></br> I love modern architecture with open floor plans, crisp, clean looks, 
       and monochromatic color palettes.<br></br> With my love for nature, my home is ideally surrounded by wildlife and flora but also a short drive from a Whole Foods.</p>
       <a href="#" class="btn btn-primary">Portfolio</a> <a href="#" class="btn btn-primary">Github</a> <a href="#" class="btn btn-primary">LinkedIn</a>
  </div></div>
  <hr></hr>
  <div><div class="card-body">
    <h1 class="card-title">Angelo Rocky Dibello</h1>
    <img src={Angelo} alt="Michelle" style={{width: '36%'}} />
    <br></br>
    <br></br>
    <p class="card-text">Hi there, I'm Angelo Rocky Dibello and I've been a computer lover since I can remember.<br></br>Starting from a passion for videogames I've seen through 
      my eyes the incredible evolution of the "species"<br></br>like Charles Darwin would probably say. I've owned Atari, Commodore 64, Nintendo, Amiga 500, Pc and Mac.<br></br>I've purchased 
      my first computer because my major course of study was Computers, Circuit Boards, CPU,<br></br>Telecommunication Arts and Technology in Monopoli (BA), South Italy. I've graduated in 1999. 
      After that I've decide<br></br>to pursue a Music career and I've earned my Music Performance Major in Milan, Italy in 2004. I am an up and coming<br></br>web developer, currently in the UCLA Extension 
      Full-Stack Web Development Coding Bootcamp (2020/21).</p>
      <a href="#" class="btn btn-primary">Portfolio</a> <a href="#" class="btn btn-primary">Github</a> <a href="#" class="btn btn-primary">LinkedIn</a>
    </div></div>
</div>
    )
    
}
    
        

export default Gallery;