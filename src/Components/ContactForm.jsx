import React, { useState } from 'react';
import './ContactForm.css';
import phone from '../Assets/phone.svg';
import emailicon from '../Assets/email.svg';
import loc from '../Assets/loc.svg';
import share from '../Assets/share.svg';
import fb from '../Assets/fb.svg';
import ig from '../Assets/ig.svg';
import wp from '../Assets/wp.svg';
import go from '../Assets/go.svg';
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

                    <img src={phone} class="phone"></img>
                    <p class="number">+02 01000444401</p>

                    </div>

                    <div className='row-c'>

                    <img src={emailicon} class="phone"></img>
                    <p class="number">Jailanhammad@gmail.com</p>

                    </div>

                    <div className='row-c'>

                    <img src={loc} class="phone"></img>
                    <p class="number">Masr El Gdida</p>

                    </div>


                    <div className='row-c'>

                    <img src={share} class="phone"></img>

                    <div class="icons">

                    <img src={fb} class="phone"></img>
                    <img src={ig} class="phone"></img>
                    <img src={wp} class="phone"></img>

                    </div>

                    </div>

            </div>

    <div className='c-form-2'>



    <form className='c-form-2'  onSubmit={sendMsg} >

      <input type="text" onChange={(i)=>{setTitle(i.target.value)}}  className='c-c' placeholder="First Name"/>
      <input type="text" onChange={(i)=>{setSubtitle(i.target.value)}}  className='c-c'placeholder="Last Name"/>
      <input type="email" onChange={(i)=>{setEmail(i.target.value)}}  className='c-c' placeholder="Email"/>
      <input type="tel" onChange={(i)=>{setNumber(i.target.value)}}   className='c-c'placeholder="Phone Number"/>

      
    </form>

    {/* <button type="submit" onClick={(sendMsg)=>{console.log(title,subtitle,email,number,msg)}} class="save-btn">Save</button> */}
    <button type="submit" onClick={sendMsg} class="save-btn">Save</button>





    </div>

    </div>


    <div className='select'>
        
        <h1 className='select-text'>
        Select Subject?
        </h1>

            <div className='row-subject'>

            <div className='subject-1'>

            <div className='checkbox'>

            </div>
            <h1 className='general'>General Inquiry</h1>
            </div>

            <div className='subject-1'>

            <div className='checkbox'>

            </div>
            <h1 className='general'>Brand Identity</h1>
            </div>

            <div className='subject-1'>

            <div className='checkbox'>

            </div>
            <h1 className='general'>UI/UX</h1>
            </div>

            <div className='subject-1'>

            <div className='checkbox'>

            </div>
            <h1 className='general'>Packaging Design</h1>
            </div>

            </div>

    </div>


<div className='message'>


     
<h1 className='message-text'>
Message        
</h1>



<div className='c-c-2'>


<div className='two-row'>

<form className='formmm' onSubmit={sendMsg}>
    
<input  type="tel" onChange={(i)=>{setMsg(i.target.value)}}   className='c-c' placeholder="Write your message..." />

</form>

<div className='button-div'>

<img src={go} class="go"></img>

<button className='button'>
Send Message
</button>

</div>


</div>

</div>




</div>





</div>

      
        
        </>
    );
}
 
export default Form;