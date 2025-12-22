import React from 'react';
import './SkillsC.css';
import {Link, link} from 'react-router-dom';


const SkillsC = (props) => {
    return ( 
        <>


            <img src={props.ai} class="ai-pic">
            </img>
            <p class="ai-text">
<Link to="/Work-page" className='linkkk'>
{props.aitext}
</Link>
            </p>
            <p class="p">
<Link to="/Work-page" className='linkkk'>
{props.aitextt}
</Link>
            </p>
 
        
        
        </>
     );
}
 
export default SkillsC;