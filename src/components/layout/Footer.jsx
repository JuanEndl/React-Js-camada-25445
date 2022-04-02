//todavia a preparar

import logofooter from '../assets/iconos/logofooter2.png';
import github from '../assets/iconos/github.png';
import linkedin from '../assets/iconos/linkedin.png';
import './Footer.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { VscGithub } from 'react-icons/vsc';



const Footer = () => {
	return (
		<>
			<footer className="bgfooterColor text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
						<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
							<Link to="/">
								<img className="logoFotter" src={logofooter} alt="logofooter" />
							</Link>
							<span className="ml-3 text-xl">Virtual Computer</span>
						</a>
						<p className="mt-2 text-sm text-gray-500 ml-8">Lider en ventas</p>
					</div>
					<div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ASUS</h2>
							<nav className="list-none mb-10">
							<li>
								<p class="text-gray-600 hover:text-gray-800">First Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Second Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Third Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Fourth Link</p>
							</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RYZER</h2>
							<nav className="list-none mb-10">
							<li>
								<p class="text-gray-600 hover:text-gray-800">First Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Second Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Third Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Fourth Link</p>
							</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COOLER MASTER</h2>
							<nav className="list-none mb-10">
							<li>
								<p class="text-gray-600 hover:text-gray-800">First Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Second Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Third Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Fourth Link</p>
							</li>
							</nav>
						</div>
						<div className="lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NVIDIA</h2>
							<nav className="list-none mb-10">
							<li>
								<p class="text-gray-600 hover:text-gray-800">First Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Second Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Third Link</p>
							</li>
							<li>
								<p class="text-gray-600 hover:text-gray-800">Fourth Link</p>
							</li>
							</nav>
						</div>
					</div>
				</div>
				<div className="bgfooterColorTwo bg-gray-100">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-white mt-">
							© 2022 Camada 25445 --
							<a href="https://github.com/JuanEndl/React-Js-camada-25445" rel="noopener noreferrer" className="text-white" target="_blank"> @GitHub </a>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a href="https://github.com/JuanEndl?tab=repositories" rel="noopener noreferrer" className="text-white" target="_blank">
							<img className='iconInfo' src={github} alt="github"/>
						</a>
						<a href="https://www.linkedin.com/in/juan-cruz-endl" rel="noopener noreferrer" className="text-white" target="_blank">
							<img className='iconInfo ml-3' src={linkedin} alt="github"/>
						</a>
						</span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
