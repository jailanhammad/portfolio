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
    <FooterC logoo={logoo} />
    </div>


    <div class="port">

    <FooterC bold="Portfolio" />
    <FooterC bold="About" />
    <FooterC bold="Contact" />
    <FooterC bold="Services" />
    <FooterC bold="FAQs" />
    <FooterC bold="Terms" />

    </div>




</article>

</footer>

        
        </>
      );
}
 
export default Footer;