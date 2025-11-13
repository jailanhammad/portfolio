import React from 'react';
import './WorkC.css';
import TiltedCard from '../Components/TiltedCard';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';


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


<TiltedCard
  imageSrc={project1}
  altText="Giza Zoo Website"
  captionText="Giza Zoo Website"
  containerHeight="200px"
  containerWidth="300px"
  imageHeight="200px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
     Giza Zoo Website
    </p>
  }
/>

        </article>


        <article className='article'>

<div className='all'>

<h1 className='title'>Real Esatate Website</h1>
<p className='para'>
    {props.paragraph}
</p>
<p className='view'>{props.view}</p>


</div>


<TiltedCard
imageSrc={project2}
altText="Real Esatate Website"
captionText="Real Esatate Website"
containerHeight="200px"
containerWidth="300px"
imageHeight="200px"
imageWidth="300px"
rotateAmplitude={12}
scaleOnHover={1.2}
showMobileWarning={false}
showTooltip={true}
displayOverlayContent={true}
overlayContent={
<p className="tilted-card-demo-text">
Real Esatate Website
</p>
}
/>

</article>




<article className='article'>

<div className='all'>

<h1 className='title'>Jewellery Website</h1>
<p className='para'>
    {props.paragraph}
</p>
<p className='view'>{props.view}</p>


</div>


<TiltedCard
imageSrc={project3}
altText="Jewellery Website"
captionText="Jewellery Website"
containerHeight="200px"
containerWidth="300px"
imageHeight="200px"
imageWidth="300px"
rotateAmplitude={12}
scaleOnHover={1.2}
showMobileWarning={false}
showTooltip={true}
displayOverlayContent={true}
overlayContent={
<p className="tilted-card-demo-text">
Jewellery Website
</p>
}
/>

</article>



        </div>
     
        
        
        
        
        
        </>
     );
}
 
export default WorkC;