import React from 'react';
import './Contact.css';
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

const Contact = () => {
    return (
        <div>
            <div className='contact' id='contact'>
                <div className='contact-area'>
                    <div className='footer'>
                        <div>
                            <h3>Nicolas Cabrera</h3>
                            <h3>London, UK</h3>
                            <h3>Nicolascc1@hotmail.com</h3>
                        </div>
                        <div>
                            <img className='icon' src={email} alt='email logo' />
                            <img className='icon' src={linkedin} alt='linkedin logo' />
                            <img className='icon' src={github} alt='github logo' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;