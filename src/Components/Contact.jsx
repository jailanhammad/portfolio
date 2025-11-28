import React from 'react';
import './Contact.css';
import cnt from '../Assets/contact-bg.svg';
import phone from '../Assets/phone.svg';
import email from '../Assets/email.svg';
import loc from '../Assets/loc.svg';
import share from '../Assets/share.svg';
import fb from '../Assets/fb.svg';
import ig from '../Assets/ig.svg';
import wp from '../Assets/wp.svg';
import nextt from '../Assets/nextt.svg';

import Cinfo from '../Components/Cinfo';



const Contact = () => {
    return ( 
        <>
        
        <article class="contact-2">

    <div class="bg-div">
        <img src={cnt} class="contact-bg"></img>
    </div>

    <div class="info-3">

        <h1 class="info-text">Info</h1>

        <div class="coloumn-info-2">

        <div class="row-info">
        <Cinfo numberr="+02 01000444401" phone={phone} />
        </div>
        <div class="row-info">
        <Cinfo numberr="Jailanhammad@gmail.com" phone={email} />
        </div>
        <div class="row-info">
        <Cinfo numberr="Masr El Gdida" phone={loc} />
        </div>

        </div>


        <div class="row-info">
        <Cinfo phone={share} />

                <div class="icons">
                <Cinfo phone={fb} />
                <Cinfo phone={ig} />
                <Cinfo phone={wp} />
                </div>
                
        </div>

 
        
    </div>

    <article class="contact">

    <h1 class="contact-text">Contact Me</h1>

    <div class="c-coloumn">

        <div class="c-line">
            <p class="fill">Name</p>
            <hr class="new-line"></hr>
        </div>

        <div class="c-line">
            <p class="fill">Email</p>
            <hr class="new-line"></hr>
        </div>

        <div class="c-line">
            <p class="fill">Message</p>
            <hr class="new-line"></hr>
        </div>

       

    </div>



    <div class="rowww">

        <button class="send">
            Send
        </button>


        <div class="more-div-2">
            <p class="more-text-2">More About</p>
            <img src={nextt} class="next"></img>
        </div>
    

    </div>

    </article>

   
</article>

        
        
        
        
        </>
     );
}
 
export default Contact;