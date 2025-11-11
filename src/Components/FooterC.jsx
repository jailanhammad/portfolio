import React from 'react';
import './FooterC.css';

const FooterC = (props) => {
    return (  
        <>
    
        <h1 class="boldd">{props.bold}</h1>
        <p class="light">{props.light}</p>
        <p class="c-text">{props.medium}</p>

        </>
    );
}
 
export default FooterC;