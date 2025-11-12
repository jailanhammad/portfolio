import React from 'react';
import AboutCard from '../Components/AboutCard';
import hero from '../Assets/hero.svg';

const AboutMe = () => {
    return ( 
        <>
        
        
        
        
        <section class="hero-2">
    <div class="about-box-22">
        <h2>More About Me</h2>
        <p class="p">Hi, I'm Jailan, a 21-year-old Digital Art and Design student at Egypt University of Informatics. I'm passionate about blending creativity and technology to design meaningful, visually engaging, and user-friendly experiences. Over the past few years, I've developed strong skills in UI/UX design and front-end development, and I enjoy bringing ideas to life through design and code.</p>
    </div>
    <div class="portrait">
        <img src={hero} class="hero-3" alt="portrait"></img>
    </div>
</section>
  
            
    <section className='secc'>

        <h2>Education</h2>

    <AboutCard edu="Egypt University of Informatics (EUI)— Digital Art & Design
        2021 – Present
        Currently in my senior year, focusing on user experience, digital interfaces, and creative technologies. My education combines both artistic creativity and technical precision." />

    </section>



    <section className='secc'>

        <h2>Work Experience</h2>

        <AboutCard edu="Hammad Motors Showroom — Digital Designer & Front-End Developer 
        2020 – 2025 – Present
        Designed digital content, advertisements, and promotional materials for the showroom’s online platforms. Helped create engaging visuals for car promotions and improved the website’s layout to enhance user experience. This role strengthened my real-world design and marketing communication skills." />

        <AboutCard edu="Freelance & University Projects -  2022 – Present
        Worked on several design and development projects for academic and independent clients. Designed and developed interactive websites and digital campaigns. Collaborated with teams to create engaging UI/UX concepts. Gained three years of experience combining creativity with functionality." />

    </section>

    <section className='secc'>
        <h2>My Quality Services</h2>

        <div class="card-2">
        <AboutCard edu="UI/UX Design – crafting smooth, intuitive digital experiences." />
        <AboutCard edu="Web Design & Front-End Development – building responsive, modern websites." />
        <AboutCard edu="Brand Identity Design – creating cohesive and memorable visuals." />
        <AboutCard edu="Creative Content Design – producing visuals for brands and social media campaigns." />
        </div>

    </section>
 
        
        
        
        </>
     );
}
 
export default AboutMe;