import React from 'react';
import './About.css';
import Insights from '../Components/Insights';
import svg from '../Assets/svgs.svg';
import next from '../Assets/next.svg';

const About = () => {
    return ( 
    <>
    
    <article class="about-section">

<h1 class="about-me-text">About Me</h1>
<hr class="line-2"></hr>

<div class="center">


    <div class="info">

        <p class="hi">
            Hi, I’m Jailan, a 21-year-old Digital Art and Design student at <br></br> <span class="hi-bold">Egypt University of Informatics.</span> 
        </p>

        <p class="im">
            I’m passionate about creating modern, engaging designs and bringing them to life through <br></br>  <span class="im-bold">front-end development.</span>
             Over the past few years, I’ve worked on different university and freelance projects that helped me grow my creative and technical skills. I love working on ideas that mix art, design, and technology and my portfolio is where I share that journey.            </p>


    </div>


    <div class="pic-div">
        <img src={svg} class="svgs"></img>
    </div>

</div>


<section class="insights">

<Insights number="100+" text="Project Complete" />
<Insights number="4+" text="Year of Experience"/>
<Insights number="3+" text="Internships" />

</section>


<div class="more-div">
    <p class="more-text">More About</p>

    <img src={next} class="next"></img>
</div>


</article>



    </>
         
       
     );
}
 
export default About;