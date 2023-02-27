import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext';
import Burgas from '../Burgas/Burgas';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const { modal, amounts, finalAmount, setAmounts, showAmounts, setShowAmounts, guardarCiclo, setCicloNombre, nombreCiclo, setNombreCiclo, setMovimientos, movimientos, user, loading, setLoading, getFinalAmount, getMovements, logout } = useContext(ModalContext);

    function openNav() {
        const burgas = document.querySelectorAll('.burgas');
        const fondoNav = document.querySelector('.fondoNav');
        const navBar = document.getElementById("navBar");
        const body = document.querySelector('body');

        if (window.innerWidth <= 840) {
            burgas[0].classList.toggle('burga0');
            burgas[1].classList.toggle('burga1');
            burgas[2].classList.toggle('burga2');
            navBar.classList.toggle("nav-menu_visible");
            fondoNav.classList.toggle('displayNav');
            body.classList.toggle('no-scroll');
        } else {
            burgas[0].classList.remove('burga0');
            burgas[1].classList.remove('burga1');
            burgas[2].classList.remove('burga2');
            navBar.classList.remove("nav-menu_visible");
            fondoNav.classList.remove('displayNav');
            body.classList.remove('no-scroll');
        }
    }

    return (
        <header className="header">

            <div className="header__bg-color">

                <div className="header__cont">
                    <Link to='/' className="header__title">
                        <h1>Finanzas <span>personales</span></h1>
                    </Link>
                    <Burgas openNav={openNav} />
                </div>

                <nav className="header__navbar" id="navBar">
                    <ul className="header__ul">
                        <li>
                            <Link className="header__nav__item" onClick={openNav} to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" onClick={openNav} to="/ciclos">Ciclos</Link>
                        </li>
                        {/* <li>
                            <Link className="header__nav__item" onClick={openNav} to="/Presupuesto">Armá tu presupuesto</Link>
                        </li> */}
                        <li>
                            <Link className="header__nav__item" onClick={openNav} to="/categorias">Categorías</Link>
                        </li>
                        <li>
                            <Link className="header__nav__item" onClick={openNav} to="/grafico">Gráfico</Link>
                        </li>
                        <li>
                            <p className="header__nav__item"
                                onClick={() => {
                                    logout()
                                    openNav()
                                }}
                            >Cerrar sesión</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='fondoNav' onClick={openNav}></div>

        </header>
    )
}

export default NavBar;