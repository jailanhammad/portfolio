import React from 'react';
import './ContactForm.css';
import phone from '../Assets/phone.svg';
import email from '../Assets/email.svg';
import loc from '../Assets/loc.svg';
import share from '../Assets/share.svg';
import fb from '../Assets/fb.svg';
import ig from '../Assets/ig.svg';
import wp from '../Assets/wp.svg';
import go from '../Assets/go.svg';

const Form = (props) => {
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

                    <img src={email} class="phone"></img>
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

            <div className='c-c'>

            <p class="first-name">First Name</p>
            {/* <hr className='line' /> */}

            </div>

            <div className='c-c'>

            <p class="first-name">Last Name</p>
            {/* <hr className='line' /> */}

            </div>

            <div className='c-c'>

            <p class="first-name">Email</p>
            {/* <hr className='line' /> */}

            </div>

            <div className='c-c'>

            <p class="first-name">Phone Number</p>
            {/* <hr className='line' /> */}

            </div>


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

<div className='fill'>
    
<p class="write">Write your message..</p>

</div>

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