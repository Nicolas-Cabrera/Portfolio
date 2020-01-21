import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
		<div>
			<Sidebar />
		</div>
		<div className='right'>
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
    </div>
  );
}

export default App;
