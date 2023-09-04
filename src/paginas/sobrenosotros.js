import React from 'react'
import '../css/sobrenosotros.css'
import tyres from '../img/marcas/tyresb.svg'


function SobreNosotros() {
  return (
    <section>
      <div className='continer-fluid contenedor-acordeon pt-5 pb-5'>
        <h1 className='col-12 mb-5'>Preguntas Frecuentes</h1>
        <div class="accordion col-11 col-md-10 col-lg-10 mx-auto" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>¿¿Cuál es la ubicación de su tienda en Ecuador?</strong>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Nuestra tienda se encuentra ubicada en la calle Chimborazo y Aurelio Lainez, en la hermosa provincia de Santa Elena, Ecuador. Estamos convenientemente ubicados para servir a nuestros clientes de la región y más allá.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>¿Cuáles son los métodos de pago que aceptan?</strong>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Aceptamos una variedad de métodos de pago, incluyendo efectivo, tarjetas de crédito y débito, transferencias bancarias y pagos en línea. Nuestro objetivo es brindarte opciones para que puedas elegir la que mejor te convenga.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>¿Tienen una política de garantía para sus productos?</strong>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              Sí, respaldamos la calidad de nuestros productos. Ofrecemos una garantía que varía según el tipo de producto, pero generalmente cubre defectos de fabricación y problemas relacionados con la calidad. Si tienes alguna inquietud sobre un producto específico, no dudes en ponerse en contacto con nuestro equipo de atención al cliente.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid cont-nosotros pt-5 pb-5 mx-auto'>
        <div>
          <h1>Sobre Nosotros</h1>
          <div className='nosotros-texto d-flex justify-content-between align-items-center mt-5 mb-5 flex-wrap'>
            <p className='col-12 col-md-6 col-lg-6'>Estamos dedicados a proporcionar soluciones de alta calidad en "llantas, tubos y reencauche" a nuestros valiosos clientes. Fundada en 2015, nuestro negocio se ha convertido en un referente en la industria gracias a nuestro compromiso inquebrantable con la calidad y la satisfacción del cliente.
              la calidad es nuestra prioridad número uno. Cada producto que ofrecemos, ya sean llantas de alta gama, tubos resistentes o cualquier otro artículo de nuestro catálogo, cumple con los estándares más exigentes de la industria. Nos enorgullecemos de ofrecer productos que son duraderos, confiables y que superan las expectativas de nuestros clientes.
            </p>
            <img className='img-fluid col-12 col-md-6 col-lg-6' src={tyres} alt="tyres&m" />
          </div>
        </div>

      </div>
      <div className='container-fluid contenedor-ubicacion pt-5 pb-5 mx-auto'>
        <div className='d-flex justify-content-betweeen align-items-start flex-wrap flex-row-reverse col-11 col-md-11 col-lg-11'>
          <h1 className='col-12 col-md-6 col-lg-6'>Ubicación</h1>
          <div className='col-12 col-md-6 col-lg-6'>
            <h2>Calle Chimborazo-Aurelio lainez</h2>
            <p>Tyres&M</p>
            <span className='badge text-bg-light'>Mapa</span>
            <br />
            <br />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.80073347997!2d-80.86074598455987!3d-2.2285292380099726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902e0906bf548dd9%3A0xd86fa0d145c9d38b!2sChimborazo%20392%2C%20Santa%20Elena!5e0!3m2!1ses!2sec!4v1672345504843!5m2!1ses!2sec" width="400" height="300" title='familia yagual' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SobreNosotros