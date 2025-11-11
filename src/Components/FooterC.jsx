import React from 'react';
import './FooterC.css';

const FooterC = (props) => {
    return (  
        <>
        

        <footer class="footer">

<article class="footer-row">

    <div class="logo-div">
        <img src={props.logoo} class="logo"></img>
    </div>


    <div class="port">

        <h1 class="boldd">{props.bold}</h1>

    </div>




</article>

</footer>

        
        
        
        </>
    );
}
 
export default FooterC;