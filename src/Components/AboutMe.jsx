import React, {useEffect, useState} from 'react';
import AboutCard from '../Components/AboutCard';
import hero from '../Assets/hero.svg';
import TextType from './TextType';
import AnimatedList from "../Components/AnimatedList";
import { supabase } from '../Supabase';

const AboutMe = () => {

    const items = ['Education'] ['Work Experienc']; 


    const [loading, setLoading] = useState(true);
    const [Aboutus, setAboutus] = useState([


        {

                id:"",
                title:"",
                description:"",
                img:"",
                
               } 


]) ;


useEffect(()=>{

 async function getAllAboutusAPI(){
  const res = await supabase.from("Aboutus").select("*");
  setAboutus(res.data);
  // console.log(res.data);
    setLoading(false);
}
getAllAboutusAPI();

},[]);

if (loading) return <p>Loading Api's...</p>;


    return ( 
        <>
        
{Aboutus
  .filter(Aboutus => Aboutus.id === 1)
  .map(Aboutus => (
 
        <section class="hero-2">
    <div class="about-box-22">
        <h2>{Aboutus.title}</h2>
        <TextType 
        text={Aboutus.description}
        typingSpeed={15}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        />
    </div>
    <div class="portrait">
        <img src={Aboutus.img} class="hero-3" alt="portrait"></img>
    </div>
        </section>
  
  ) 
  ) 
  }

{Aboutus
  .filter(Aboutus => Aboutus.id === 2)
  .map(Aboutus => (   
    <section className='secc'>
        
    <h2>{Aboutus.title}</h2>

    <AboutCard
    edu={Aboutus.description}
    />
    </section>

) 
) 
}
    <AnimatedList
    items={items}
    onItemSelect={(item, index) => console.log(item, index)}
    showGradients={true}
    enableArrowNavigation={true}
    displayScrollbar={true}
  />


{Aboutus
  .filter(Aboutus => Aboutus.id === 3)
  .map(Aboutus => (   
    <section className='secc'>

        <h2>{Aboutus.title}</h2>

        <AboutCard
        edu={Aboutus.description}
        />
    </section>

) 
) 
}

{Aboutus
  .filter(Aboutus => Aboutus.id === 4)
  .map(Aboutus => (   
    <section className='secc'>
       <AboutCard
        edu={Aboutus.description}
        />
    </section>

) 
) 
}
    <AnimatedList
    items={items}
    onItemSelect={(item, index) => console.log(item, index)}
    showGradients={true}
    enableArrowNavigation={true}
    displayScrollbar={true}
  />

{Aboutus
  .filter(Aboutus => Aboutus.id === 5)
  .map(Aboutus => (   
    <section className='secc'>
        <h2>{Aboutus.title}</h2>

        <div class="card-2">
        <AboutCard edu={Aboutus.description} />
        </div>

    </section>
) 
) 
}
{Aboutus
  .filter(Aboutus => Aboutus.id === 6)
  .map(Aboutus => (   
    <section className='secc'>
        <div class="card-2">
        <AboutCard edu={Aboutus.description} />
        </div>

    </section>
) 
) 
}
{Aboutus
  .filter(Aboutus => Aboutus.id === 7)
  .map(Aboutus => (   
    <section className='secc'>
        <div class="card-2">
        <AboutCard edu={Aboutus.description} />
        </div>

    </section>
) 
) 
}
{Aboutus
  .filter(Aboutus => Aboutus.id === 8)
  .map(Aboutus => (   
    <section className='secc'>
        <div class="card-2">
        <AboutCard edu={Aboutus.description} />
        </div>

    </section>
) 
) 
}

    <AnimatedList
    items={items}
    onItemSelect={(item, index) => console.log(item, index)}
    showGradients={true}
    enableArrowNavigation={true}
    displayScrollbar={true}
  />

        
        
        
        </>
     );
}
 
export default AboutMe;