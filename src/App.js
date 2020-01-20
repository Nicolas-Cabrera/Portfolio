import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Home from './Home/Home';
import About from './About/About';
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
		</div>
    </div>
  );
}

export default App;
