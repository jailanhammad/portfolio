import './Hero.css';
import sp from '../Assets/sparkle.svg';
import hero from '../Assets/hero.svg';
import dot from '../Assets/dott.svg';
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";
import {Link, link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import { supabase } from '../Supabase';

const Hero = () => {

    const containerRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [Personalidentity, setPersonalidentity] = useState([


        {

                id:"",
                title:"",
                coverimg:"",
                image:[],
                description:"",
                details:"",
                category:[]
                
               } 


]) ;


useEffect(()=>{

 async function getAllPersonalidentityAPI(){
  const res = await supabase.from("Personalidentity").select("*");
  setPersonalidentity(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllPersonalidentityAPI();

},[]);

if (loading) return <p>Loading...</p>;



    return ( 
    <>


{Personalidentity
  .filter(Personalidentity => Personalidentity.id === 1)
  .map(Personalidentity => (

<article class="hero-section">

<section class="coloumn-section">


    <BlurText
    text={Personalidentity.title}
    
    delay={150}
    animateBy="words"
    direction="top"
    className="hi-text"
    />


    <BlurText
    text={Personalidentity.subtitle}
    delay={150}
    animateBy="words"
    direction="top"
    className="jailan-text"
    />

    
    <hr class="line"></hr>

 
    <p class="text-01">
    {Personalidentity.description}
    </p>



    <div class="explore-div">

        <img src={sp} class="svg"></img>
<Link to="/Work-page" className='linkkk'>
        <p class="explore">{Personalidentity.button}</p>
</Link>
        <img src={sp} class="svg"></img>

    </div>

</section>


<img src={hero} class="hero-jee"></img>


</article>

) 
) 
}


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