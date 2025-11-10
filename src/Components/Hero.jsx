import React from 'react';
import './Hero.css';
import sp from '../Assets/sparkle.svg';
import hero from '../Assets/hero.svg';
import dot from '../Assets/dott.svg';

const Hero = () => {
    return ( 
    <>
    

<article class="hero-section">

<section class="coloumn-section">

    <p class="hi-text">Hi, I’m </p>
    <p class="jailan-text">Jailan Hammad</p>

    <hr class="line"></hr>

    <p class="text-01">
        a Digital Art and Design student passionate about creativity, design, and  <span class="bold">front-end development.</span> 
    </p>

    <div class="explore-div">

        <img src={sp} class="svg"></img>
        <p class="explore">Explore My Work</p>
        <img src={sp} class="svg"></img>

    </div>

</section>


<img src={hero} class="hero-jee"></img>


</article>

    
<article class="categories">

<p class="textt">UI / UX</p>
<img src={dot}  class="dot"></img>
<p class="textt">Programming</p>
<img src={dot}  class="dot"></img>
<p class="textt">Branding</p>
<img src={dot} class="dot"></img>
<p class="textt">Graphic Design</p>
<img src={dot}  class="dot"></img>
<p class="textt">3D Modeling</p>
<img src={dot} class="dot"></img>
<p class="textt">Photography</p>

</article>    
        </>
         
       
     );
}
 
export default Hero;