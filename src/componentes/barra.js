import React from "react";
import logo from '../img/tyres logo.svg'
import '../css/barra.css'
import {Link} from 'react-router-dom'
function Barra() {
    return (
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.youtube.com/">
                    <img class="logo" src={logo} alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/sobrenosotros">Sobre Nosotros</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to='/productos' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="/productos/llantas">Llantas</Link></li>
                                <li><Link class="dropdown-item" to='/productos/tubos'>Tubos</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to='/productos/reencauche'>Reencauche y más</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Barra;
