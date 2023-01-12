import React from 'react';
import "../css/servicio.css"
import {Link} from 'react-router-dom'

function Servicio() {
  return (
    <div class="contenedor-s container-fluid text-center">
            
        <div class="row">   
            <div class="col-12 col-md-12 col-lg-12">
                <h1> ¿Por que escoger nuestros servicios?</h1>
            </div>     
            <div class="texto col-12 col-md-6 col-lg-4">
                <h4>Calidad en nuestros Productos</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo, perferendis amet doloribus dolorem quod quam? Libero eligendi quod culpa eveniet corrupti! Aliquid provident eum neque quibusdam magni at aliquam!</p>
                <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                </div>
            </div>
            <div class="texto col-12 col-md-6 col-lg-4">
                <h4>Garantía por Producto</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo, perferendis amet doloribus dolorem quod quam? Libero eligendi quod culpa eveniet corrupti! Aliquid provident eum neque quibusdam magni at aliquam!</p>
                <div>
                    <i class="bi bi-award"></i>
                    <i class="bi bi-award-fill"></i>
                </div>
            </div>
            <div class="texto col-12 col-md-12 col-lg-4">
                <h4>Aceptamos varios métodos de pago</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nemo, perferendis amet doloribus dolorem quod quam? Libero eligendi quod culpa eveniet corrupti! Aliquid provident eum neque quibusdam magni at aliquam!</p>
                <div>
                    <i class="bi bi-credit-card"></i>
                    <i class="bi bi-wallet2"></i>
                </div>
            </div>
            <div class="row row-margin">
                <div class="botones-s d-flex flex-wrap justify-content-center align-items-center">
                    <Link to="/sobrenosotros">Sobre Nosotros</Link>
                    <a href="https://www.youtube.com/watch?v=lbarxmeGn4E">Envianos un Correo</a>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Servicio;