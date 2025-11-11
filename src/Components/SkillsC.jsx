import React from 'react';
import './SkillsC.css';


const SkillsC = (props) => {
    return ( 
        <>


            <img src={props.ai} class="ai-pic"></img>
            <p class="ai-text">{props.aitext}</p>
            <p class="p">{props.aitextt}</p>
 
        
        
        </>
     );
}
 
export default SkillsC;