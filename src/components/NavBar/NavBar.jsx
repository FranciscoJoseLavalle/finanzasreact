import React from 'react'
import Burgas from '../Burgas/Burgas';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    function openNav() {
        const burgas = document.querySelectorAll('.burgas');
        const navBar = document.getElementById("navBar");

        burgas[0].classList.toggle('burga0')
        burgas[1].classList.toggle('burga1')
        burgas[2].classList.toggle('burga2')
        navBar.classList.toggle("nav-menu_visible");
    }

    return (
        <header className="header">

            <div className="header__bg-color">

                <div className="header__cont">
                    <h1 className="header__title">Finanzas personales</h1>
                    <button className="header__button" type="button">¡Empezá ya!</button>

                    <Burgas openNav={openNav} />
                </div>

                <nav className="header__navbar" id="navBar">
                    <ul className="header__ul">
                        <li>
                            <Link className="header__nav__item" to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" to="/">Armá tu presupuesto</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" to="/">¡Próximamente!</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default NavBar;