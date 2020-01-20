import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='content' id='home'>
            <h1 className='name'>Nicolas Cabrera</h1>
            <div className='type-script'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('London based Full-Stack Developer!')
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
    );
}
export default Home;