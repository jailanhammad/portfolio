import React, { useState } from 'react';
import './ContactForm.css';
import phone from '../Assets/phone.svg';
import emailicon from '../Assets/email.svg';
import loc from '../Assets/loc.svg';
import share from '../Assets/share.svg';
import fb from '../Assets/fb.svg';
import ig from '../Assets/ig.svg';
import wp from '../Assets/wp.svg';
import { supabase } from '../Supabase';

const Form = (props) => {

    const[title, setTitle]= useState("");
    const[subtitle, setSubtitle]= useState("");
    const[email, setEmail]= useState("");
    const[number, setNumber]= useState("");
    const[msg, setMsg]= useState("");

   async function sendMsg(){
        const res = await supabase.from("Contactus").insert({"title":title , "subtitle":subtitle, "email":email, "number":number, "message":msg} )
        console.log(res);
    }

    return (  
        <>
  
        
<div className='card'>

        <h1 className='contact-text'>
        Contact Information
        </h1>

   

    <div className='big-row'>

            <div className='c-form'>

                    <div className='row-c'>

                    <img src={phone} class="phone-22"></img>
                    <p class="number">+02 01000444401</p>

                    </div>

                    <div className='row-c'>

                    <img src={emailicon} class="phone-22"></img>
                    <p class="number">Jailanhammad@gmail.com</p>

                    </div>

                    <div className='row-c'>

                    <img src={loc} class="phone-22"></img>
                    <p class="number">Masr El Gdida</p>

                    </div>


                    <div className='row-c'>

                    <img src={share} class="phone-22"></img>

                    <div class="icons">

                    <img src={fb} class="phone-22"></img>
                    <img src={ig} class="phone-22"></img>
                    <img src={wp} class="phone-22"></img>

                    </div>

                    </div>

            </div>

    <div className='c-form-2'>



    <form className='c-form-2'  onSubmit={sendMsg} >

      <input type="text" onChange={(i)=>{setTitle(i.target.value)}}  className='c-c' placeholder="First Name"/>
      <input type="text" onChange={(i)=>{setSubtitle(i.target.value)}}  className='c-c'placeholder="Last Name"/>
      <input type="email" onChange={(i)=>{setEmail(i.target.value)}}  className='c-c' placeholder="Email"/>
      <input type="tel" onChange={(i)=>{setNumber(i.target.value)}}   className='c-c'placeholder="Phone Number"/>
      <input type="tel" onChange={(i)=>{setMsg(i.target.value)}}   className='c-c' placeholder="Write your message..." />

      
    </form>

    {/* <button type="submit" onClick={(sendMsg)=>{console.log(title,subtitle,email,number,msg)}} class="save-btn">Save</button> */}
    <button type="submit" onClick={sendMsg} class="button">Send Message</button>






    </div>

    </div>


<div class="subject-container">
    <p class="subject-title">Select Subject?</p>
    <div class="subject-grid">
        <label class="subject-item">
            <input type="checkbox" name="subject" value="general"/>
            <span class="custom-box"></span>
            <span class="label-text">General Inquiry</span>
        </label>

        <label class="subject-item">
            <input type="checkbox" name="subject" value="branding"/>
            <span class="custom-box"></span>
            <span class="label-text">Brand Identity</span>
        </label>

        <label class="subject-item">
            <input type="checkbox" name="subject" value="uiux"/>
            <span class="custom-box"></span>
            <span class="label-text">UI/UX</span>
        </label>

        <label class="subject-item">
            <input type="checkbox" name="subject" value="packaging"/>
            <span class="custom-box"></span>
            <span class="label-text">Packaging Design</span>
        </label>
    </div>
</div>





</div>

      
        
        </>
    );
}
 
export default Form;