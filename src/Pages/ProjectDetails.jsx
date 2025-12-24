import React, {useEffect, useState} from 'react';
import './ProjectDetails.css';
import {Helmet} from "react-helmet";
import WorkNav from '../Components/WorkNav';
import { supabase } from '../Supabase';
import pink from '../Assets/pink.svg';
import TiltedCard from '../Components/TiltedCard';
import Footer from '../Components/Footer';

const ProjectDetails = () => {


    const [loading, setLoading] = useState(true);
    const [Projectdetails, setProjectdetails] = useState([


        {

                id:"",
                title:"",
                coverimg:"",
                image:[],
                description:"",
                details:"",
                category:[]
                
               } 


]) ;


useEffect(()=>{

 async function getAllProjectdetailsAPI(){
  const res = await supabase.from("Projectdetails").select("*");
  setProjectdetails(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllProjectdetailsAPI();

},[]);

if (loading) return <p>Loading Api's...</p>;

    return (  
        <>
                
<Helmet>
        <title>My Work</title>
        <meta name="description" content="This is Project Details page" />
        <meta property="og:title" content="My Work" />
        <meta property="og:image" content="/Assets/logo.svg" />
</Helmet>


<div>

<header class="header"> 
 
<WorkNav />

</header>  

{Projectdetails
  .filter(Projectdetails => Projectdetails.id === 2)
  .map(Projectdetails => (

<article className='pd-article'>

    <article className='first-boxx-pd'>

    <img src={pink} alt="pink" className='pink' />
    <h1 className='ui-text'>{Projectdetails.Category}</h1>

    </article>


<p className='sectiontitle-text'>{Projectdetails.sectiontitle}</p>


<article className='pd-des'>

<div className='back-des'>
<p className='des-text'>{Projectdetails.whatis}</p>
</div>

</article>

<article className='pd-des'>

<div className='back-des'>
<p className='des-text'>{Projectdetails.whycreated}</p>
</div>

</article>

<article className='pd-des'>

<div className='back-des'>
<p className='des-text'>{Projectdetails.maingoal}</p>
</div>

</article>

<p className='sectiontitlee-text'>{Projectdetails.sectiontitlee}</p>

<article className='pd-all-coloumn'>

<h1 className='pd-name-text'>{Projectdetails.projectname}</h1>

<TiltedCard
  imageSrc={Projectdetails.img}
  altText="Giza Zoo Website"
  captionText="Giza Zoo Website (Home Page)"
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

<p className='projectname-text'>{Projectdetails.pagename}</p>
<p className='projectabout-text'>{Projectdetails.projectabout}</p>


</article>

<article className='pd-all-coloumn'>

<TiltedCard
  imageSrc={Projectdetails.imgtwo}
  altText="Giza Zoo Website"
  captionText="Giza Zoo Website (Contact Page)"
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

<p className='projectname-text'>{Projectdetails.pagenametwo}</p>
<p className='projectabout-text'>{Projectdetails.projectabouttwo}</p>


</article>

<article className='pd-all-coloumn'>

<TiltedCard
  imageSrc={Projectdetails.imgthree}
  altText="Giza Zoo Website"
  captionText="Giza Zoo Website (Categories Page)"
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

<p className='projectname-text'>{Projectdetails.pagenamethree}</p>
<p className='projectabout-text'>{Projectdetails.projectaboutthree}</p>


</article>

</article>

) 
) 
}

<Footer />





</div>
        
        
        
        
        
        
        
        
        </>
    );
}
 
export default ProjectDetails;