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

import {Link, link} from 'react-router-dom';



const Contact = () => {
    return ( 
        <>

<section class="contact-section">
    <img src="https://i.ibb.co/m5Ym9zD/purple-gem.png" class="shape shape-top" alt="decorative gem"/>
    <img src="https://i.ibb.co/m5Ym9zD/purple-gem.png" class="shape shape-right" alt="decorative gem"/>

    <div class="main-wrapper">
        <div class="contact-container">
            <div class="contact-form-side">
                <h2>Contact Me</h2>
                <form>
                    <div class="input-field">
                        <input type="text" placeholder="Name" required/>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div class="input-field">
                        <input type="phone" placeholder="Mobile number" required/>
                    </div>
                    <div class="input-field">
                        <textarea placeholder="Message" rows="1"></textarea>
                    </div>
                    <button type="submit" class="send-btn">Send</button>
                </form>
            </div>

            <div class="info-panel-side">
                <div class="info-content">
                    <h3>Info</h3>
                    
                    <div class="info-item">
                    <img src={phone} className='icon-width' />
                    <span>+02 01000444401</span>
                    </div>
                    
                    <div class="info-item">
                    <img src={email} className='icon-width' />
                        <span>Jailanhammad@gmail.com</span>
                    </div>
                    
                    <div class="info-item">
                    <img src={loc} className='icon-width' />
                        <span>Masr El Gdida</span>
                    </div>

                    <div class="social-links">
                    <img src={share}  className='icon-width'/>
                        <a href="https://www.facebook.com/"><img src={fb}  className='icon-width'/></a>
                        <a href="https://www.instagram.com/"><img src={ig} className='icon-width'/></a>
                        <a href="https://web.whatsapp.com/"><img src={wp}  className='icon-width'/></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="more-info-footer">
            <div class="more-info-link">
             
<Link to="/Contact-Page" className='arrow'>
                More Info    <span class="arrow">→</span>
</Link>
            </div>
        </div>
    </div>
</section>








        
        
        </>
     );
}
 
export default Contact;