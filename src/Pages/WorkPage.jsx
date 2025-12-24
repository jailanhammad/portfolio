import React, {useEffect, useState} from 'react';
import './WorkPage.css';
import WorkNav from '../Components/WorkNav';
import WorkC from '../Components/WorkC';
import pink from '../Assets/pink.svg';
// import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';
import Footer from '../Components/Footer';
import TiltedCard from '../Components/TiltedCard';

import {Helmet} from "react-helmet";
import { supabase } from '../Supabase';

const WorkPage = () => {


const [loading, setLoading] = useState(true);
const [Projects, setProjects] = useState([


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

 async function getAllProjectsAPI(){
  const res = await supabase.from("Projects").select("*");
  setProjects(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllProjectsAPI();

},[]);

if (loading) return <p>Loading...</p>;

const project1 = Projects.find(p => p.id === 1) || {};
const project2 = Projects.find(p => p.id === 2) || {};
const project3 = Projects.find(p => p.id === 3) || {};

    return ( 
        <>
        
<Helmet>
        <title>My Work</title>
        <meta name="description" content="This is the Work page" />
        <meta property="og:title" content="My Work" />
        <meta property="og:image" content="/Assets/logo.svg" />
</Helmet>


        <div>

<header class="header"> 
 
<WorkNav />

</header>   


{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (

<article className='first-boxx'>

<img src={pink} alt="pink" className='pink' />
<h1 className='ui-text'>{Projects.category}</h1>

</article>

) 
) 
}

{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (

<div className='center'>

        <p className='paragraph'>
        {Projects.Pagedescription}
        </p>

</div>


) 
) 
}

<article className='article-row-200'>

{Projects
  .filter(Projects => Projects.id === 1)
  .map(Projects => (

<div className='all'>

<WorkC 
title={Projects.title} 
description={Projects.description} 
Details={Projects.Details}
/>

</div>  


) 
) 
}

<TiltedCard
  imageSrc={project1.coverimg}
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


<article className='article-row-200'>

{Projects
  .filter(Projects => Projects.id === 2)
  .map(Projects => (

<div className='all'>

<WorkC
title={Projects.title} 
description={Projects.description} 
Details={Projects.Details}
/>

</div>


) 
) 
}


<TiltedCard
  imageSrc={project2.coverimg}
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

<article className='article-row-200'>


{Projects
  .filter(Projects => Projects.id === 3)
  .map(Projects => (

<div className='all'>

<WorkC 
title={Projects.title} 
description={Projects.description} 
Details={Projects.Details}
/>

</div>


) 
) 
}


<TiltedCard
  imageSrc={project3.coverimg}
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

<Footer />


   </div>
        
        </>
     );
}
 
export default WorkPage;