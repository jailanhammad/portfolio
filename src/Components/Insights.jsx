import React from 'react';
import './About.css';


const Insights = (props) => {
    return ( 
    <>
    

<article class="insightsss">


    <div class="first">

        <p class="num">
        {props.number}   
        </p>
        <hr class="line-3"></hr>
        <p class="text-02"> {props.text} </p>

    </div>

</article>

    </>
         
       
     );
}
 
export default Insights;