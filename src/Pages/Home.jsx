import React from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Work from '../Components/Work';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Aurora from "../Components/Aurora";

import {Helmet} from "react-helmet";


const Home = () => {
    
    return ( 
        <>

<Helmet>
        <title>Jailan's Portfolio - Home</title>
        <meta name="description" content="This is the Home page" />
        <meta property="og:title" content="Home" />
        <meta property="og:image" content="/Assets/logo.svg" />
</Helmet>
             
        <div>


<header class="header"> 

<Nav />

</header>

<Aurora
  colorStops={["#1E1E1E", "#FF8CB0", "#D9A5A5"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>  

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