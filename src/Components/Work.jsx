import React, {useEffect, useState} from 'react';
import { useRef } from 'react';import './Work.css';
import cd from '../Assets/cd.svg';
import {Link, link} from 'react-router-dom';
import { supabase } from '../Supabase';


 const Work = () => {

    const containerRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [Work, setWork] = useState([


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

 async function getAllWorkAPI(){
  const res = await supabase.from("Work").select("*");
  setWork(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllWorkAPI();

},[]);

if (loading) return <p>Loading...</p>;

    return (
        <>



        <article class="work">

        {Work
  .filter(Work => Work.id === 1)
  .map(Work => (

<h1 class="what-i-text">{Work.title}</h1>

) 
) 
}
  

        <section class="skills-section-work">
 

<section class="middle">

{Work
  .filter(Work => Work.id === 1)
  .map(Work => (

    <p class="service">{Work.section}</p>

) 
) 
}
    <div class="container">
    {Work
  .filter(Work => Work.id === 1)
  .map(Work => (
        
        <img src={Work.img} class="disc"></img>
        ) 
        ) 
        }
          
        <div class="services-grid">

        {Work
  .filter(Work => Work.id === 1)
  .map(Work => (

            <div class="service-btn btn-1">
            
<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>
            </div>
) 
) 
}
  

{Work
  .filter(Work => Work.id === 2)
  .map(Work => (

            <div class="service-btn btn-2">

<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>
            </div>

) 
) 
}
  

{Work
  .filter(Work => Work.id === 3)
  .map(Work => (


            <div class="service-btn btn-3">
<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>
            </div>

) 
) 
}
  
{Work
  .filter(Work => Work.id === 4)
  .map(Work => (


            <div class="service-btn btn-4">
                
<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>
                
            </div>

) 
) 
}

  
{Work
  .filter(Work => Work.id === 5)
  .map(Work => (

            <div class="service-btn btn-5">

<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>
            </div>

) 
) 
}

  
{Work
  .filter(Work => Work.id === 6)
  .map(Work => (

            <div class="service-btn btn-6">
                
<Link to="/Work-page" className='linkkk'>
{Work.program}
</Link>  
                
            </div>

) 
) 
}

        </div>


    </div>

</section>


        </section>




        </article>

        
        
        </>

      );
 }
  
 export default Work;