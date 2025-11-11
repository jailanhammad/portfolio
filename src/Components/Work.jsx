import React from 'react';
import './Work.css';
import cd from '../Assets/cd.svg';
import Card from '../Components/Card';


 const Work = () => {
    return (
        <>

        <article class="work">

<h1 class="about-me-text">What I Do</h1>
<hr class="line-2"></hr>

<section class="middle">

    <p class="service">My Services</p>


    <div class="info-22">

    <div class="two-divs">

    <Card text1="UI / UX" text2="Programming" />

    </div>

    <div class="two-divs-2">

    <Card text1="Graphic Design" text2="Photography" />

    </div>

    <div class="two-divs-3">

    <Card text1="Branding" text2="3D Modeling" />

    </div>


    </div>


    <div class="cd-div">
        <img src={cd} class="cd"></img>
    </div>



</section>

</article>

        
        
        </>

      );
 }
  
 export default Work;