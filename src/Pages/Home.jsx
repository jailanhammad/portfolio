import React from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Work from '../Components/Work';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';



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

<Contact />

<Footer />


        </div>
           
        </>
     );
}
 
export default Home;