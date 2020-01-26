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
                            <a href='mailto:nicolascc1@hotmail.com'
							target='_blank' rel="noopener noreferrer">
								<img className='icon' src={email} alt='email logo' />
							</a>
							<a href='https://github.com/Nicolas-Cabrera'
							target='_blank' rel="noopener noreferrer">
								<img className='icon' src={linkedin} alt='linkedin logo' />
							</a>
							<a href='https://www.linkedin.com/in/nicolas-cabrera-32a80b171/'
							target='_blank' rel="noopener noreferrer">
								<img className='icon' src={github} alt='github logo' />
							</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;