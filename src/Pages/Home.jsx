import React from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Work from '../Components/Work';
import Skills from '../Components/Skills';


const Home = () => {
    return ( 
        <>
             
        <div>


<header class="header"> 

<Nav />

</header>

<Hero />

<About />
 
<Work />

<Skills />

        </div>
           
        </>
     );
}
 
export default Home;