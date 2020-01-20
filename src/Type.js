import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Type(props) {
	return (
		<div className='section' id='about'>
				<div className='type-title'>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(props.text)
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
		</div>
	)
}