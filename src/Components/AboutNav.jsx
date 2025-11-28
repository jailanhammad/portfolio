import React from 'react';
import './Nav.css';
import logo from '../Assets/logo.svg';
import icon from '../Assets/translate.svg';
import {Link, link} from 'react-router-dom';

const AboutNav = () => {
    return ( 
    <>
    

<header class="header"> 


        <img src={logo} class="logo"></img>

        <div class="menu">

<Link class="text" to="/">
Home
</Link>

<Link class="text-bold" to="/About-me"> 
About
</Link>

<Link class="text" to="/Work-Page"> 
What I Do
</Link>

<Link class="text" to="/Contact-Page"> 
Contact
</Link>
        </div>

        <img src={icon} class="icon"></img>


</header>
        









        </>
         
       
     );
}
 
export default AboutNav;