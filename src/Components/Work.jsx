import React from 'react';
import './Work.css';
import cd from '../Assets/cd.svg';

 const Work = () => {
    return (
        <>

        <article class="work">

<h1 class="about-me-text">What I Do</h1>
<hr class="line-2"></hr>

<section class="middle">

    <p class="service">My Services</p>


    <div class="info-2">

    

            <div class="two-divs">

                <div class="one">
                <p class="ui">UI / UX</p>
                </div>

                <div class="one">
                    <p class="ui">Programming</p>
                </div>

            </div>


            <div class="two-divs-2">

                <div class="one">
                <p class="ui">Graphic Design</p>
                </div>

                <div class="one">
                    <p class="ui">Photography</p>
                </div>

            </div>


            <div class="two-divs-3">

                <div class="one">
                <p class="ui">Branding</p>
                </div>

                <div class="one">
                    <p class="ui">3D Modeling</p>
                </div>

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