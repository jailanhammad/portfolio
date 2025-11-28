import React from 'react';
import './AboutPage.css';
import AboutNav from '../Components/AboutNav';
import AboutMe from '../Components/AboutMe';
import Footer from '../Components/Footer';

import {Helmet} from "react-helmet";




const AboutPage = () => {

    
    return ( 
        
        <>

<Helmet>
        <title>About Me</title>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="About Me" />
        <meta property="og:image" content="/Assets/logo.svg" />
</Helmet>
             

          <div>
            
            
         
<header class="header"> 

<AboutNav />

</header>   
            
<AboutMe />          
<Footer />
   
            
        </div>   
    
           
        </>
     );
}
 
export default AboutPage;