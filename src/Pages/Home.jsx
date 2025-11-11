import React from 'react';
import './Home.css';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Work from '../Components/Work';

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


        </div>
           
        </>
     );
}
 
export default Home;