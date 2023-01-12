import React from 'react'


function Subestructura({ llanta, brand, alt, nombre, clasificacion, unidades, precio, dolares, centavos, direccion}) {
    return (
        <div className='ps-3 pe-5 d-flex carta-producto align-items-center mb-3 flex-wrap' >
            <div className='col-12 col-md-2 col-lg-2 d-flex justify-content-center'>
                <img className='img-fluid' src={llanta} alt="llanta" />
            </div>

            <div className='col-12 col-md-10 col-lg-10'>
                <img className='img-fluid' src={brand} alt={alt} />
                <hr />
                <div className='d-flex justify-content-between align-items-end flex-wrap'>
                    <div>
                        <h1>{nombre}</h1>
                        <p>{clasificacion}</p>
                        <div className='cuadro-p d-flex text-center'>
                            <p>STOCK</p>
                            <p>{unidades}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-around'>
                        <div className='d-flex text-center precio'>
                            <p className='pe-3'>{precio}</p>
                            <p className='pe-3'>{dolares}</p>
                            <p className='pe-3'>{centavos}</p>
                        </div>
                        <a className="bg-danger p-4 text-light mb-3 text-center" href={direccion} target="_blank" rel='noopener noreferrer'>Adquirir <i class="bi bi-whatsapp"></i></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subestructura