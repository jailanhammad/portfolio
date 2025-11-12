import './Hero.css';
import sp from '../Assets/sparkle.svg';
import hero from '../Assets/hero.svg';
import dot from '../Assets/dott.svg';
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";

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

    {/* <div
    ref={containerRef}
    style={{position: 'relative'}}
    >
    <VariableProximity
        label={''}
        className={'variable-proximity-demo'}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff='linear'
    />
    </div> */}

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