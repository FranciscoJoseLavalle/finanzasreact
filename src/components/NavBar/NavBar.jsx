import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <header className="header">

            <div className="header__bg-color">

                <div className="header__cont">
                    <h1 className="header__title">Finanzas personales</h1>
                    <button className="header__button" type="button">¡Empezá ya!</button>

                    <div className="burga">
                        <div className="burgas"></div>
                        <div className="burgas"></div>
                        <div className="burgas"></div>
                    </div>
                </div>

                <nav className="header__navbar" id="navBar">
                    <ul className="header__ul">
                        <a className="header__nav__item" href="/">Inicio</a>
                        <a className="header__nav__item" href="./templates/presupuesto.html">Armá tu presupuesto</a>
                        <a className="header__nav__item" href="#">¡Próximamente!</a>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default NavBar;