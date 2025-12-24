import React, {useEffect, useState} from 'react';
import './WorkC.css';
import { supabase } from '../Supabase';



const WorkC = (props) => {


const [loading, setLoading] = useState(true);
const [Projects, setProjects] = useState("") ;


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

    return ( 
        <>
        
        <div>
  

        <article className='article'>

{Projects
  .filter(Projects => Projects.id === 2)
  .map(Projects => (

<div className='all'>

<h1 className='title'>{props.title}</h1>
<p className='para'>
    {props.paragraph}
</p>
<p className='view'>{props.view}</p>

</div>


   ) 
  ) 
  }

        </article>

        </div>
     
        
        
        
        
        
        </>
     );
}
 
export default WorkC;