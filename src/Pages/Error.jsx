import React, { Component } from 'react';
import './Error.css';
import caple from '../Assets/caple.png';


const Error = () => {
    return ( 

<>


<div className='error-div'>

<img src={caple} alt="caple" className='caple' />

<p className='error-text'> 404</p>
<p className='error-text-2'> Oops! <br /> Look Like You Took a Wrong Turn</p>


</div>


</>



     );
}
 
export default Error;