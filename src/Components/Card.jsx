import React from 'react';
import './Card.css';

const Card = (props) => {
    return ( 

        <>
<div class="info-2">

        

<div class="two-divs">

    <div class="one">
    <p class="ui"> {props.text1} </p>
    </div>

    <div class="one">
        <p class="ui">{props.text2}</p>
    </div>

</div>




</div>

        
        </>
     );
}
 
export default Card;