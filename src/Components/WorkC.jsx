import React from 'react';
import './WorkC.css';



const WorkC = (props) => {
    return ( 
        <>
        
        <div>
  


        <article className='article'>

            <div className='all'>

            <h1 className='title'>{props.title}</h1>
            <p className='para'>
                {props.paragraph}
            </p>
            <p className='view'>{props.view}</p>


            </div>


            <img src={props.project1} alt="project1" className='project1' />

        </article>

        </div>
     
        
        
        
        
        
        </>
     );
}
 
export default WorkC;