import React from 'react';
import './Work.css';
import cd from '../Assets/cd.svg';
import {Link, link} from 'react-router-dom';


 const Work = () => {
    return (
        <>




        <article class="work">

<h1 class="about-me-text">What I Do</h1>

<section class="middle">

    <p class="service">My Services</p>


    <div class="container">
        <img src={cd} class="disc"></img>

        <div class="services-grid">
            <div class="service-btn btn-1">

<Link to="/Work-page" className='linkkk'>
UI / UX
</Link>
            </div>

            <div class="service-btn btn-2">
<Link to="/Work-page" className='linkkk'>
Programming
</Link>
            </div>

            <div class="service-btn btn-3">
<Link to="/Work-page" className='linkkk'>
Graphic Design
</Link>
            </div>


            <div class="service-btn btn-4">
                
<Link to="/Work-page" className='linkkk'>
Photography
</Link>
                
                </div>

            <div class="service-btn btn-5">

<Link to="/Work-page" className='linkkk'>
Branding
</Link>
            </div>

            <div class="service-btn btn-6">
                
<Link to="/Work-page" className='linkkk'>
3D Modeling
</Link>  
                
                </div>
        </div>
    </div>





</section>

</article>

        
        
        </>

      );
 }
  
 export default Work;