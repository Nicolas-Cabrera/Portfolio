import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
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
		</div>
    </div>
  );
}

export default App;
