
import carrito from './img/carrito.png'
import logo from './img/logo.png'
import React from 'react'
import './Navbar.css';


const NavBar = () => {
  return (
    
    <section className='navBAr'>
      <div className='header'>
        <a href='#'>
          <img className='logoApp' src={logo} alt='logo'/>
        </a>
        <div className='usuarioCarrito'>
          <button> Mi usuario </button>
          <button className='buttonContact'> Contacto </button>
          <a href='#'>
            <img className='carritoApp' src={carrito} alt='carrito'/>
          </a>
        </div>
      </div>
    </section>
    
  )
}

export default NavBar
