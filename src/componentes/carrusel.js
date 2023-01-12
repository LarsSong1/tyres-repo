import React from "react";
import llantas from "../img/tire.jpg"
import '../css/carrusel.css'
import aros from "../img/tire rims.jpg"
import reencauche from "../img/reencauche.jpg"
import { Link } from "react-router-dom";

function Carrusel() {
    return (
       <div class="contenedor">
            <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={llantas} class="d-block w-100 img-fluid" alt="..." />
                            <div class="carousel-caption d-flex align-items-start justify-content-start">
                                <h1>Tyres & M</h1>
                                <h2>Ofrece los mejores repuestos</h2>
                            </div>
                            <div class="carousel-button">
                                <Link class="button-white" to='/sobrenosotros'>SOBRE NOSOTROS</Link>
                                <Link class="button-black" to="/productos/llantas">VER PRODUCTOS</Link>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={aros} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-flex align-items-start justify-content-start">
                                <h1>Llantas</h1>
                                <h2>Ofrece los mejores descuentos</h2>
                            </div>
                            <div class="carousel-button">
                                <Link class="button-white"  to='/sobrenosotros'>SOBRE NOSOTROS</Link>
                                <Link class="button-black" to="/productos/llantas">VER PRODUCTOS</Link>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={reencauche} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-flex align-items-start justify-content-start">
                                <h1>Reencauche y más</h1>
                                <h2>Ofrece los mejores acesoramientos</h2>
                            </div>
                            <div class="carousel-button">
                                <Link class="button-white" to='/sobrenosotros'>SOBRE NOSOTROS</Link>
                                <Link class="button-black" to="/productos/llantas">VER PRODUCTOS</Link>
                            </div>
                    </div>
                </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
            </div>
       </div>
    );
};


export default Carrusel;