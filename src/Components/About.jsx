import React, {useEffect, useState} from 'react';
import { supabase } from '../Supabase';
import './About.css';
import Insights from '../Components/Insights';
import svg from '../Assets/svgs.svg';
import next from '../Assets/next.svg';
import {Link, link} from 'react-router-dom';

const About = () => {



    const [loading, setLoading] = useState(true);
    const [Aboutsection, setAboutsection] = useState([


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

 async function getAllAboutsectionAPI(){
  const res = await supabase.from("Aboutsection").select("*");
  setAboutsection(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllAboutsectionAPI();

},[]);

if (loading) return <p>Loading...</p>;


    return ( 
    <>

{Aboutsection
  .filter(Aboutsection => Aboutsection.id === 1)
  .map(Aboutsection => (
    
    <article class="about-section">

<h1 class="about-me-text">{Aboutsection.title}</h1>

<div class="center">


    <div class="info">

        <p class="hi">
        {Aboutsection.brief}        
        </p>

        <p class="im">
        {Aboutsection.description} 
        </p>


    </div>


    <div class="pic-div">
        <img src={Aboutsection.img} class="svgs"></img>
    </div>

</div>


<article class="insights">

<Insights  text={Aboutsection.inshightone}  />
<Insights  text={Aboutsection.inshighttwo} />
<Insights number="3+" text={Aboutsection.inshightthree}  />

</article>

<div class="more-info-footer-22">
            <div class="more-info-link-22">
             
<Link to="/About-me" className='arrow-22'>
{Aboutsection.moretext}   <span class="arrow-22">{Aboutsection.icon}</span>
</Link>
            </div>
        </div>

</article>



) 
) 
}

    </>
         
       
     );
}
 
export default About;