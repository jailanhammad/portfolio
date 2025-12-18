import React, {useEffect, useState} from 'react';
import { supabase } from '../Supabase';

const TestAPI = () => {

    const [loading, setLoading] = useState(true);
    const [ Projects, setProjects ]= useState ([
       {

        id:"",
        title:"",
        coverimg:"",
        image:[],
        description:"",
        details:"",
        category:[]
        
       } 

    ]);

    useEffect(() =>

    {

       
       async function callGetAPI(){

        const Projects = await supabase.from("Projects").select("*");
        setProjects(Projects.data);
        setLoading(false);

        // console.log(projects.data);
        // console.log(projects.data[0].title);
        // console.log(projects.data[0].coverimg);


        }
    
        callGetAPI()

    },[]);

if (loading) return (<p>loading...</p>);

    return (  

        <>

12345


<p>

{ Projects[0].title }

</p>
<p>

{ Projects[0].date }

</p>

<img src={ Projects[0].coverimg } alt="" />
<img src={ Projects[0].image } alt="" />

<p>

{ Projects[0].description }

</p>


<p>

{ Projects[0].Details }

</p>

{
    Projects[0].category.map((c)=>
    {

   return <h1>{c}</h1>

    })
}

{
    Projects[0].image.map((img)=>
    {
  
 
    return (

        <div>

        <img src={img.URL} alt={img.alt}/>
        
           </div>
    
    )




    })
}


</>
    );
}
 
export default TestAPI;