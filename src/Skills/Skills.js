import React from 'react';
import './Skills.css';
import Type from '../Type';
import js from '../images/js.png';
import react from '../images/react.png';
import c from '../images/c.PNG';
import sql from '../images/sql.PNG';
import node from '../images/node.png';
import github from '../images/github.png';
import html from '../images/html.png';
import css from '../images/css.png';

const Skills = () => {
    return (
        <div>
            <div className='section' id='skills'>
				<div>
					<Type text='Skills' />
				</div>			
                <div className='skills-row'>
                    <img className='skill-item' src={js} alt='js' />
                    <img className='skill-item' src={react} alt='react' />
                    <img className='skill-item' src={c} alt='C#' />
                    <img className='skill-item' src={sql} alt='mysql' />                        
					<img className='skill-item' src={node} alt='node' />
                    <img className='skill-item' src={github} alt='github' />
                    <img className='skill-item' src={html} alt='html' />
                    <img className='skill-item' src={css} alt='css' />
                </div>
            </div>
        </div>
    )
}

export default Skills;