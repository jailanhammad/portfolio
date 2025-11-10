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

            <h1 class="text-bold">Home</h1>
            <a href="about.html" class="text">About</a>
            <h1 class="text">What I Do</h1>
            <h1 class="text">Contact</h1>

        </div>

        <img src={icon} class="icon"></img>


</header>
        
        </>
         
       
     );
}
 
export default Nav;