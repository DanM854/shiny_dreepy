import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

//rutas
import pokemonlogo from '../assets/images/pokemon_logo.png';


function Header() {
  return (
    <div className='App'>
        <header className='App-header'>
            <div className="page-logotype">
                <Link className='logo-link' to={'/'}>
                    <img src={pokemonlogo} alt='logo'></img>
                    <h3>Pokedex</h3>
                </Link>
            </div>
            <div className='navegation-container'>
                <nav className='nav'>
                    <ul>
                        <li className='nav-item'><button className='btn btn-header' id='see-all'>See All</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='normal'>Normal</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='fire'>Fire</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='water'>Water</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='grass'>Grass</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='electric'>Electric</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='ice'>Ice</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='fighting'>Fighting</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='poison'>Poison</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='ground'>Ground</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='flying'>Flying</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='psychic'>Psychic</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='bug'>Bug</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='rock'>Rock</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='ghost'>Ghost</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='dark'>Dark</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='dragon'>Dragon</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='steel'>Steel</button></li>
                        <li className='nav-item'><button className='btn btn-header' id='fairy'>Fairy</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}


export default Header;