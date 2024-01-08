import React, { useRef } from 'react'
import LinkedIn from '../../assets/linkdin.png'
import Naukari from '../../assets/nauakri.png'
import healthcare from '../../assets/healthcare.png'
import travel from '../../assets/travel.png'
import toptraveltrip from '../../assets/toptraveltrip.jpeg'
import './Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4unlpfp', 'template_8tsj1vc', form.current,'JPhjD44AdVWno-5Vr')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email send succesfully");
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
   <section className='contactPage'>
    <div className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
            I have had the opportunity to work with a diverse group of companies and 
            Educational Sector.Some of the notable companies I have worked with includes.
        </p>
        <div className="clientImgs">
            <img src={healthcare} alt="" className="clientImg1" />
            <img src={travel} alt="" className="clientImg2" />
            <img src={toptraveltrip} alt="" className="clientImg3" />
        </div>
    </div>
    <div className="contact" id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
            <a href='https://www.linkedin.com/in/pooja-tambe-48767b224'><img src={LinkedIn} alt='' className='link' height={60}></img></a>
              <img src={Naukari} alt='' className='link' height={60}></img>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact