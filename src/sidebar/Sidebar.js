import React, { useState } from 'react';
import toggle from '../images/toggle.png';
import './Sidebar.css';

export default function Side() {

	const [ navWidth, setNavWidth ] = useState('0px');
	const [ backdrop, setBackdrop ] = useState('none');
	const [ menuicon, setMenuIcon ] = useState('block');

	function openNav() {
		setNavWidth(navWidth === '0px' ? '200px' : '0px');
		setBackdrop(backdrop === 'none' ? 'block' : 'none');
		setMenuIcon(menuicon === 'block' ? 'none' : 'block');
	}

	function closeNav() {
		setNavWidth(navWidth === '200px' ? '0px' : '0px');
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