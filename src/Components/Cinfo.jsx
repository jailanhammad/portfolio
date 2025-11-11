import React from 'react';
import './Cinfo.css';



const Cinfo = (props) => {
    return (
        <>
        
        <div class="coloumn-info">

        
            <div class="row-info">
                <img src={props.phone} class="phone"></img>
                <p class="number">{props.numberr}</p>
            </div>

        </div>

        
        
        </>
     );
}
 
export default Cinfo;