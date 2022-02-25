import React from 'react';


import carrito from '../assets/iconos/carrito.png';
import logo from '../assets/iconos/logo.png';
import { ImSearch } from 'react-icons/im';

import './Navbar.css';

const NavBar = () => {
	return (
		<section className="navBAr">
			<div className="header">
				<div className="w-screen flex flex-row items-center p-1 justify-between  shadow-xs">
					<div className="ml-8 text-lg text-gray-700 hidden md:flex">
						<img className="logoApp" src={logo} alt="logo" />
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
						<div className="text-gray-700 text-center  px-4 py-2 m-2">
							<a href="#">
								<img className="shoppingCart" src={carrito} alt="carrito" />
							</a>
						</div>
            <div className='qty'>0</div>
						<div className="text-gray-700 px-4 py-2 m-2">
							<button className="text-color">Mi Usuario</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
