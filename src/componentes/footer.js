import React from 'react'
import '../css/footer.css'
import logo from '../img/tyres logo.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="text-center text-lg-start text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Acude a nuestro  local</span>
                </div>
            </section>



            <section class="footer">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <img src={logo} alt="logo" />
                            </h6>
                            <p>
                                Es un negocio de venta de neumaticos y reencauche ubicado en la provincia de Santa Elena.
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Productos
                            </h6>
                            <p>
                                <Link to='/productos/llantas' class="text-reset"><p>Llantas</p></Link>
                            </p>
                            <p>
                                <Link to='/productos/tubos' class="text-reset"><p>Tubos</p></Link>
                            </p>
                            
                            <p>
                                <Link to='/productos/reencauche' class="text-reset"><p>Reencauche y más</p></Link>
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Ubicación/ Sobre Nosotros
                            </h6>
                            <p>
                                <Link to='/sobrenosotros' class="text-reset"><p>Sobre Nosotros</p></Link>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                            <p>
                                <a href="https://wa.me/5930967185460?text= Hola, muy buenas, necesito de informacion sobre sus productos o servicios de llantas y reencauche" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-whatsapp"> </i> Whatsapp
                                </a>
                                </p>
                                
                            <p> 
                                <a href="https://m.facebook.com/100049837987927/"  target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"> </i>
                                    Facebook
                                </a>
                            </p>
                            <p><i class="bi bi-telephone-outbound"> </i> + 01 234 567 88</p>
                        </div>

                    </div>

                </div>
            </section>

            <div class="text-center p-4" >
                © 2021 Copyright:    
                <i> </i>
                <a class="text-reset fw-bold" href="#!">Tyres & M</a>
            </div>
        </footer>

    );
};

export default Footer;