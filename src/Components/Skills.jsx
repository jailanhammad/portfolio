import React, {useEffect, useState} from 'react';
import { useRef } from 'react';
import './Skills.css';
import SkillsC from './SkillsC';
import { supabase } from '../Supabase';

const Skills = () => {


    const containerRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [Skills, setSkills] = useState([


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

 async function getAllSkillsAPI(){
  const res = await supabase.from("Skills").select("*");
  setSkills(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllSkillsAPI();

},[]);

if (loading) return <p>Loading Api's...</p>;

    return (
        <>
        
        
        
        <article class="skills-div">

    <section class="skills-section">
    {Skills
  .filter(Skills => Skills.id === 1)
  .map(Skills => (
        <h2 class="skills">{Skills.title}</h2>
) 
) 
}
        <div class="skills-grid">

        {Skills
  .filter(Skills => Skills.id === 1)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}


{Skills
  .filter(Skills => Skills.id === 2)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}


{Skills
  .filter(Skills => Skills.id === 3)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}

{Skills
  .filter(Skills => Skills.id === 4)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}

{Skills
  .filter(Skills => Skills.id === 5)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}


{Skills
  .filter(Skills => Skills.id === 6)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}


{Skills
  .filter(Skills => Skills.id === 7)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}

{Skills
  .filter(Skills => Skills.id === 8)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}

{Skills
  .filter(Skills => Skills.id === 9)
  .map(Skills => (

            <div class="skill-card">
            <SkillsC
             ai={Skills.img} 
             aitext={Skills.text} 
             aitextt={Skills.see} 
             alt={Skills.alt} 

              />    
            </div>

) 
) 
}
        </div>
    </section>



{/* 



    <article class="big-coloumn">
    
        <section class="row-sec">
    
        <div class="ai-div">
        <SkillsC ai={ai} aitext="Illustrator" aitextt="80%" />    
        </div>
    
        <div class="figma-div">
        <SkillsC ai={figma} aitext="Figma" aitextt="90%" />    
        </div>

        <div class="ae-div">
        <SkillsC ai={ae} aitext="After Effects" aitextt="75%" />    
        </div>

        <div class="blender-div">
        <SkillsC ai={blender} aitext="Blender" aitextt="70%" />    
        </div>

        </section>


        <section class="row-sec">
    
    
        <div class="ps-div">
        <SkillsC ai={ps} aitext="Photoshop" aitextt="60%" />    
        </div>


        <div class="pr-div">
        <SkillsC ai={pr} aitext="Premier" aitextt="55%" />    
        </div>


        <div class="vs-div"> 
        <SkillsC ai={vs} aitext="VS Code" aitextt="95%" />    
        </div>


        <div class="ar-div">
        <SkillsC ai={ar} aitext="Aero" aitextt="75%" />    
        </div>
    
        </section>

    
    </article> */}

</article>

        
        
        
        </>
      );
}
 
export default Skills;