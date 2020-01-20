import React, { useState } from 'react';
import toggle from '../images/toggle.png';
import './Sidebar.css';

export default function Side() {

	const [ navWidth, setNavWidth ] = useState('200px');
	const [ backdrop, setBackdrop ] = useState('block');
	const [ menuicon, setMenuIcon ] = useState('none');

	function openNav() {
		setNavWidth(navWidth === '200px' ? '0px' : '200px');
		setBackdrop(backdrop === 'none' ? 'block' : 'none');
		setMenuIcon(menuicon === 'none' ? 'block' : 'none');		
	}

	function closeNav() {
		setNavWidth(navWidth === '200px' ? '0px' : '200px');
		setBackdrop(backdrop === 'block' ? 'none' : 'none');
		setMenuIcon(menuicon === 'none' ? 'block' : 'none');
	}

	return (
		<div>
			<img className='menuicon' style={{display: `${menuicon}`}} src={toggle} alt='toggle' onClick={() => openNav()}/>
			<div className='menuclose' style={{display: `${backdrop}`}} onClick={() => closeNav()}></div>
			<div style={{width: `${navWidth}`}} className='sidebar'>
			<ul>
				<li><a href='/#home'>Home</a></li>
				<li><a href='/#about'>About</a></li>
				<li><a href='/#skills'>Skills</a></li>
				<li><a href='/#projects'>Projects</a></li>
				<li><a href='/#contact'>Contact</a></li>
			</ul>
			</div>
		</div>
	)
}