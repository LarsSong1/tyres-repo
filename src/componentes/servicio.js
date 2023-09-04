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
                <p>Nuestra dedicación a la calidad es innegociable. Creemos que la calidad no es un mero atributo, sino un compromiso constante con la excelencia que se refleja en cada producto que ofrecemos.</p>
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
                <p>Respaldamos la calidad de nuestros productos con una garantía sólida. Estamos comprometidos a ofrecerte la tranquilidad y la confianza que mereces al elegirnos como tu proveedor de confianza. Nuestra garantía es una promesa de que nuestros productos están diseñados y fabricados para cumplir con tus expectativas.</p>
                <div>
                    <i class="bi bi-award"></i>
                    <i class="bi bi-award-fill"></i>
                </div>
            </div>
            <div class="texto col-12 col-md-12 col-lg-4">
                <h4>Aceptamos varios métodos de pago</h4>
                <p>Comprendemos que cada cliente tiene preferencias diferentes cuando se trata de cómo pagar sus compras. Por eso, ofrecemos una amplia gama de opciones de pago para que puedas elegir la que mejor se adapte a ti como en Efectivo, tarjeta de debito y credito, Cheques y más</p>
                <div>
                    <i class="bi bi-credit-card"></i>
                    <i class="bi bi-wallet2"></i>
                </div>
            </div>
            <div class="row row-margin">
                <div class="botones-s d-flex flex-wrap justify-content-center align-items-center">
                    <Link to="/sobrenosotros">Sobre Nosotros</Link>
                    <a href="mailto:jairgavilanezcell@gmail.com">Envianos un Correo</a>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Servicio;