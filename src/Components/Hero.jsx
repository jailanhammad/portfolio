import './Hero.css';
import sp from '../Assets/sparkle.svg';
import hero from '../Assets/hero.svg';
import dot from '../Assets/dott.svg';
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";
import {Link, link} from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {

    const containerRef = useRef(null);


    return ( 
    <>


<article class="hero-section">

<section class="coloumn-section">


    <BlurText
    text="Hi, I’m"
    
    delay={150}
    animateBy="words"
    direction="top"
    className="hi-text"
    />


    <BlurText
    text="Jailan Hammad"
    delay={150}
    animateBy="words"
    direction="top"
    className="jailan-text"
    />

    
    <hr class="line"></hr>

 
    <p class="text-01">
        a Digital Art and Design student passionate about creativity, design, and  <span class="bold">front-end development.</span> 
    </p>



    <div class="explore-div">

        <img src={sp} class="svg"></img>
<Link to="/Work-page" className='linkkk'>
        <p class="explore">Explore My Work</p>
</Link>
        <img src={sp} class="svg"></img>

    </div>

</section>


<img src={hero} class="hero-jee"></img>


</article>

    

<div class="marquee-container">
  <div class="marquee-content">
    <span>UI / UX</span> •
    <span>Programming</span> •
    <span>Branding</span> •
    <span>Graphic Design</span> •
    <span>3D Modeling</span> •
    <span>Photography</span> •
    <span>UI / UX</span> •
    <span>Programming</span> •
    <span>Branding</span> •
    <span>Graphic Design</span> •
    <span>3D Modeling</span> •
    <span>Photography</span> •
  </div>
</div>




        </>
         
       
     );
}
 
export default Hero;