import React from 'react';
import './Projects.css';
import kodflix from '../images/kodflix.JPG';
import footapp from '../images/footapp.JPG';
import ludo from '../images/ludo.jpg';
import weatherapp from '../images/weatherapp.jpg';
import calculator from '../images/calculator.jpg';
import bookingSystem from '../images/bookingsystem.jpg';


const Projects = () => {
    return (
        <div>
            <div className='section' id='projects'>
                <h1 className='title'>Projects</h1>
                <div className='project-sec'>
					<a href='https://kodflix-nicolas.herokuapp.com/'
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Kodflix</h2>
						<img  className='project-image' src={kodflix} alt='kodflix' />
						<p>An application that displays titles of movies using a backend library. 
							This project using JavaScript, Node, React</p>
                    </a>
					<a href='https://kodirifootapp.herokuapp.com/'
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Footapp</h2>
						<img  className='project-image' src={footapp} alt='Footapp' />
						<p>An football application which tells you the scores and and predictions
							 future matches	of teams in the premier league fetching the data from 
							 an API.</p>
                    </a>
					<a href='https://github.com/Nicolas-Cabrera/Javascript-Calculator' 
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Calculator</h2>
						<img  className='project-image' src={calculator} alt='Calculator' />
						<p>This is a calculator which performs simple operations like adding, 
							substracting, multiplicating and dividing. This was developed using JavaScript</p>
                    </a>
					<a href='https://github.com/Nicolas-Cabrera/Weather-app'
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Weather App</h2>
						<img  className='project-image' src={weatherapp} alt='WeatherApp' />
						<p>This is a weather application which fetches data from an API to display the 
							temperature and a small description of a city enter by the user</p>
                    </a>
					<a href='https://github.com/Nicolas-Cabrera/Hotel-Reservation'
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Booking System</h2>
						<img  className='project-image' src={bookingSystem} alt='BookingSystem' />
						<p>A booking system for a hotel. This was developed using C# and MySQL for database.
							This allows users to book rooms and hotels to manage their rooms and availability</p>
                    </a>
					<a href='https://github.com/Nicolas-Cabrera'
						target='_blank' rel="noopener noreferrer" className='proj-item'>
						<h2>Ludo Game</h2>
						<img  className='project-image' src={ludo} alt='Ludo' />
						<p>This was developed using C# and Unity 3D based on the popular board game Ludo</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;