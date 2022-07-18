import React from 'react'
import Burgas from '../Burgas/Burgas';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    function openNav() {
        const burgas = document.querySelectorAll('.burgas');
        const fondoNav = document.querySelector('.fondoNav');
        const navBar = document.getElementById("navBar");
        const body = document.querySelector('body');

        burgas[0].classList.toggle('burga0');
        burgas[1].classList.toggle('burga1');
        burgas[2].classList.toggle('burga2');
        navBar.classList.toggle("nav-menu_visible");
        fondoNav.classList.toggle('displayNav');
        body.classList.toggle('no-scroll');
    }

    return (
        <header className="header">

            <div className="header__bg-color">

                <div className="header__cont">
                    <Link to='/' className="header__title">
                        <h1>Finanzas personales</h1>
                    </Link>
                    <Burgas openNav={openNav} />
                </div>

                <nav className="header__navbar" id="navBar">
                    <ul className="header__ul">
                        <li>
                            <Link className="header__nav__item" to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" to="/ciclos">Ciclos</Link>
                        </li>
                        {/* <li>
                            <Link className="header__nav__item" to="/Presupuesto">Armá tu presupuesto</Link>
                        </li> */}
                        <li>
                            <Link className="header__nav__item" to="/categorias">Categorías</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" to="/grafico">Gráfico</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" to="/">¡Próximamente!</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='fondoNav' onClick={openNav}></div>

        </header>
    )
}

export default NavBar;