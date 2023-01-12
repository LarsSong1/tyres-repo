import React from 'react'
import tubo from '../img/tubos/tubo.png'
import Subestructura from './subestructura';
import { useState } from 'react';
import Tubosdata from './data-tubos';


function TubosEstructura() {
    const [datos, setDatos] = useState(Tubosdata)

    function handlerTipo () {
        let tipo = document.getElementById("tipo").value
        const resultado = Tubosdata.filter((e) => {
            return e.category === tipo
        });
        setDatos(resultado)
        if (tipo === "all") {
            setDatos(Tubosdata);
        }
    }


    function handlerMarca () {
        let tipo = document.getElementById("tipo").value
        let marca = document.getElementById("marca").value
        const result = Tubosdata.filter((e) => {
            return e.category === tipo && e.distribuidor === marca 
        });
        setDatos(result)
        if (marca === "all") {
            setDatos(Tubosdata);
        }
    }

    
    function handlerReset (){
        setDatos(Tubosdata)
    }


    return (
        <div className='contenedor-productos d-flex flex-wrap justify-content-between'>
            <div className='contenedor-filtros col-11 col-md-3 col-lg-3 mx-auto mt-5 mb-5'>
                <h1 className='ps-3 pt-3'>Filtro</h1>
                <h5 className='text-center'>Ingrese datos en secuencia</h5>
                <div className='d-flex align-items-center flex-wrap'>
                    <p className='ps-3 me-3 pt-3'>T:</p>
                    <select class="form-select me-3" aria-label="Default select example" id='tipo' onChange={handlerTipo}>
                        <option selected value="all">Tipo</option>
                        <option value="carro">Carros</option>
                        <option value="moto">Motos</option>
                    </select>

                    <p className='ps-3 me-3 pt-3'>R:</p>
                    <select class="form-select me-3" aria-label="Default select example" id='marca' onChange={handlerMarca}>
                        <option selected value="all">Marca</option>
                        <option value="tyres">Tyres&M</option>
                        <option value="goodstone">Goodstone</option>

                    </select>
                </div>
                <div className='filtro-texto d-flex flex-column'>
                    <button className='w-50 mx-auto btn btn-danger' onClick={handlerReset}>Borrar Filtro</button>
                    <img className='img-fluid' src={tubo} alt="tubo" />
                    <div className='text-center mb-5'>
                        <h1>Mas vendido</h1>
                        <h2>825X16</h2>
                        <h3>$15,67/U</h3>
                        <a className="bg-danger p-4 text-light" href="!#">Adquirir <i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className='col-11 col-md-8 col-lg-8 mx-auto'>
                <div className='d-flex justify-content-start align-items-center ps-3 pe-5 pb-5 pt-5 flex-wrap'>
                    <strong><h1>Vehiculo/Rin</h1></strong>
                    <p className='pt-3 ps-5'>Moto/ R14</p>
                </div>
                {datos.map((elemento) => {
                    const { id, marca, imagen, alt, nombre, clasificacion, unidades, precio, dolares, centavos } = elemento;
                    return (
                        <Subestructura
                            key={id}
                            llanta={imagen}
                            brand={marca}
                            alt={alt}
                            nombre={nombre}
                            clasificacion={clasificacion}
                            unidades={unidades}
                            precio={precio}
                            dolares={dolares}
                            centavos={centavos}
                            direccion={`https://wa.me/5930967185460?text=Hola, muy buenas me intereso el producto ${nombre} ${clasificacion}, deseo adquirirlo. `}

                        />
                    )
                })}




            </div>
        </div>
    );
};

export default TubosEstructura