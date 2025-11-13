import React from 'react';
import './WorkPage.css';
import WorkNav from '../Components/WorkNav';
import WorkC from '../Components/WorkC';
import pink from '../Assets/pink.svg';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';
import Footer from '../Components/Footer';

const WorkPage = () => {
    return ( 
        <>
        
    
        <div>

<header class="header"> 
 
<WorkNav />

</header>   


<article className='first-boxx'>

<img src={pink} alt="pink" className='pink' />
<h1 className='ui-text'>UI & UX Design</h1>

</article>

<div className='center'>

        <p className='paragraph'>
        My process starts with understanding users their needs, goals, and challenges  then translating that into intuitive layouts and engaging visual designs. I pay attention to every detail: from color and typography to usability and accessibility.
        </p>

</div>



<div className='all'>

<WorkC title="Giza Zoo Website" paragraph="The Giza Zoo website is a modern, interactive redesign project that highlights the beauty, history, and wildlife of Egypt’s oldest zoo. My goal was to create an engaging user experience that blends education with exploration." 
view="View Project Details"/>




</div>

<div className='all'>

<WorkC title="Real Esatate Website" paragraph="The design focuses on clarity and usability featuring clean layouts, large visuals, and intuitive filters to help users find homes that match their needs. I also integrated responsive design techniques to ensure the website looks and works perfectly on all devices." 
view="View Project Details"/>

</div>

<div className='all'>

<WorkC title="Jewellery Website" paragraph="The website features product collections, detailed item pages, and a user-friendly interface that makes browsing effortless. It’s fully responsive, ensuring a seamless experience on both desktop and mobile." 
view="View Project Details"/>

</div>



<Footer />


   </div>
        
        </>
     );
}
 
export default WorkPage;