import React from 'react';
import './Nav.css';
import logo from '../Assets/logo.svg';
import icon from '../Assets/translate.svg';


const Nav = () => {
    return ( 
    <>
    

<header class="header"> 


        <img src={logo} class="logo"></img>

        <div class="menu">

            <link class="text-bold" to="/">Home</link>
            <link to="/About-me" class="text">About</link>
            <h1 class="text">What I Do</h1>
            <h1 class="text">Contact</h1>

        </div>

        <img src={icon} class="icon"></img>


</header>
        
        </>
         
       
     );
}
 
export default Nav;