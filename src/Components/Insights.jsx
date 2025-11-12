import React from 'react';
import './About.css';
import CountUp from "./CountUp";


const Insights = (props) => {
    return ( 
    <>
    

<article class="insightsss">


    <div class="first">
    <CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={2}
  className="num"
/>

        <hr class="line-3"></hr>
        <p class="text-02"> {props.text} </p>

    </div>

</article>

    </>
         
       
     );
}
 
export default Insights;