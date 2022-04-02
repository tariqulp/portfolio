import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio', 'template_qos9tp9', e.target, 'user_ZduDECZmRGTPdek0ZtPrY')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div id="contact" className="container">
            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" style={{ color: '#fff', fontFamily: 'Roboto Condensed sans-serif', fontWeight: '800' }}>Contact Us</h1>
            <form data-aos="fade-up" data-aos-duration="3000" onSubmit={sendEmail}>
                <input required name="name" type="text" className="feedback-input" placeholder="Name" />
                <input required name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea required name="message" className="feedback-input" placeholder="Message"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Contact;