import React from 'react';
import './Footer.css';
import FooterC from '../Components/FooterC';

import logoo from '../Assets/logo.svg';
import copy from '../Assets/c.svg';
import dottt from '../Assets/dott.svg';


const Footer = () => {
    return (
        <>
        
        <footer class="footer">

<article class="footer-row">

    <div class="logo-div">
    <img src={logoo} class="logo"></img>
    </div>


    <div class="port">

    <FooterC bold="Portfolio" />
    <FooterC light="About" />
    <FooterC light="Contact" />
    <FooterC light="Services" />
    <FooterC light="FAQs" />
    <FooterC light="Terms" />

    </div>

    <div class="port">


    <FooterC bold="Quick Links" />
    <FooterC light="Get in Touch" />
    <FooterC light="Help" />
    <FooterC light="Chat" />
    <FooterC light="Why Choose Me" />

    </div>

    <div class="port">

    <FooterC bold="Working Hours" />
    <FooterC light="Everyday" />
    <FooterC light="From 12:00 AM – 12:00 PM" />

    </div>

</article>


<article class="final-div">


    <div class="copy">
        <img src={copy} class="copy-icon"></img>
        <FooterC medium="2025 Jailanhammad.com. All rights reserved." />

    </div>

    <div class="copy-2">
        
        <FooterC medium="Terms & Conditions" />
        <img src={dottt} class="dot-icon"></img>
        <FooterC medium="Privacy Notice" />

    </div>




</article>

</footer>

        
        </>
      );
}
 
export default Footer;