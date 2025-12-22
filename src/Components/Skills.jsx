import React from 'react';
import './Skills.css';
import SkillsC from './SkillsC';

import ai from '../Assets/ai.svg';
import figma from '../Assets/figma.svg';
import ae from '../Assets/ae.svg';
import blender from '../Assets/blender.svg';

import ps from '../Assets/ps.svg';
import pr from '../Assets/pr.svg';
import vs from '../Assets/vs.svg';
import ar from '../Assets/ar.svg';

const Skills = () => {
    return (
        <>
        
        
        
        <article class="skills-div">

    <section class="skills-section">
        <h2 class="skills">My Skills</h2>
        
        <div class="skills-grid">
            <div class="skill-card">
            <SkillsC ai={ai} aitext="Illustrator" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={figma} aitext="Figma" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={ae} aitext="After Effects" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={blender} aitext="Blender" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={ps} aitext="Premier" aitextt="See projects"/>    
            </div>

            <div class="skill-card">
            <SkillsC ai={pr} aitext="Premier" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={vs} aitext="VS Code" aitextt="See projects" />    
            </div>

            <div class="skill-card">
            <SkillsC ai={ar} aitext="Aero" aitextt="See projects" />    
            </div>
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