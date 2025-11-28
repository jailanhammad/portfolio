import React from 'react';
import './ContactPage.css';
import logo from '../Assets/logo.svg';
import icon from '../Assets/translate.svg';
import {Link, link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import contactsvg from '../Assets/contactsvg.svg';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

const ContactPage = () => {
    return ( 
        <>
        
<Helmet>
        <title> Contact Me </title>
        <meta name="description" content="This is the Contact page" />
        <meta property="og:title" content="Contact" />
        <meta property="og:image" content="/Assets/logo.svg" />
</Helmet>




        
<header class="header"> 


<img src={logo} class="logo"></img>

<div class="menu">

<Link class="text" to="/">
Home
</Link>

<Link class="text" to="/About-me"> 
About
</Link>

<Link class="text" to="/Work-Page"> 
What I Do
</Link>

<Link class="text-bold" to="/Contact-Page"> 
Contact
</Link>




</div>

<img src={icon} class="icon"></img>


</header>

        
     <div className='hero'>

<img src={contactsvg} className='c-svg' />        

<ContactForm />

    </div>   

<Footer />
















        
        
        </>
     );
}
 
export default ContactPage;