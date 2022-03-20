import React from 'react';

import CartWidget from './CartWidget';
import logo from '../assets/iconos/logo.png';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';

import './Navbar.css';





//navbar futuro search filter

const NavBar = () => {

	



	return (
	<>
		<section className="navBAr">
			<div className="header">
				<div className="w-screen flex flex-row items-center p-1 justify-between  shadow-xs">
					<div className="ml-8 text-lg text-gray-700 hidden md:flex">
						<Link to="/">
							<img className="logoApp" src={logo} alt="logo" />
						</Link>
					</div>  	
					<div className="w-screen md:w-1/2 h-10  cursor-pointer border border-gray-300 text-sm rounded-full flex">
						<input type="search" name="serch" placeholder="Search" className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
						<i className="fas fa-search m-3 mr-5 text-lg   w-4 h-4">
							<ImSearch className="iconSearch" />
						</i>
					</div>
					<div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
						<i className="fas fa-bars" />
					</div>
					<div className="flex flex-row-reverse mr-8 hidden md:flex">
						<CartWidget/>
						<div className="text-gray-700 px-4 py-2 m-2">
							<button className="text-color btnUsuario buttonUsuario">Mi Usuario</button>
						</div>
					</div>
				</div>
			</div>
		</section>
				
		<section className='containerButtonNavBar'>
			<div className='buttonNavBar'>
				<Link to="/">  
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Todos</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/fuente`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Fuentes</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/placavideo`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Placa de video</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/memoria`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Memoria Ram</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/mother`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Motherboard</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/procesador`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Procesador</h2>
				</Link>
			</div>
		</section>
	</>
	);
};

export default NavBar;
