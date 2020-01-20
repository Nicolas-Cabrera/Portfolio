import React from 'react';
import Typewriter from 'typewriter-effect';
import './About.css';

const About = () => {
	return (
		<div>
			<div className='section' id='about'>
				<div className='title'>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('Welcome')
								.callFunction(() => {
									//console.log('String typed out!');
								})
								.pauseFor(2000)
								.callFunction(() => {
									//console.log('All strings were deleted');
								})
								.start();
						}}
					/>
				</div>
				<div className='about-me-paragraph'>
					<h2>A Full Stack Developer with passion for learning and developing all sorts of apps</h2>
					<p>An eager, talented and committed graduate developer who is passionate about programming.
                        This has pushed me to learn more every day and look for challenges that can allow me to
                         my problem-solving skills and attention to detail. Actively looking to acquire a position as a
                          junior software developer with an ambitious company that can contribute to my development as a
                           professional and so I can contribute commercially to a company as soon as possible.
                </p>
					<p>
						My current experience is working with technologies such as React, JavaScript, HTML5 and CSS.
                </p>
					<p>
						I have a Bachelors degree in Computer Science from Bedfordshire University(2:1 BSc Computer Games Development).
                </p>
				</div>
			</div>
		</div>
	)
}

export default About;