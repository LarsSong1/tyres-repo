import React from 'react';
import { useState } from 'react';
import sierra from '../img/reencauche y mas/sierra 750X16 TM.png';
import Reencauchedata from './data-reencauche'
import Subestructura from './subestructura'





function ReencaucheEstructura() {
    const [data, setData] = useState(Reencauchedata)

    function handlerCategoria () {
        let tipo = document.getElementById("tipo").value
        const resultado = Reencauchedata.filter((e)=>{
            return e.category === tipo
        });
        setData(resultado)
        if (tipo === "all"){
            setData(Reencauchedata)
        }
    }

    function handlerReset (){
        setData(Reencauchedata)
    }


    return (
        <div className='contenedor-productos d-flex flex-wrap justify-content-between'>
            <div className='contenedor-filtros col-11 col-md-3 col-lg-3 mx-auto mt-5 mb-5'>
                <h1 className='ps-3 pt-3'>Filtro</h1>
                <h5 className='text-center'>Ingrese datos en secuencia</h5>
                <div className='d-flex align-items-center flex-wrap'>
                    <p className='ps-3 me-3 pt-3'>T:</p>
                    <select class="form-select me-3" aria-label="Default select example" id='tipo' onChange={handlerCategoria}>
                        <option selected value='all'>Tipo</option>
                        <option value="reencauche" >Reencauche</option>
                        <option value="valvula" >Valvulas</option>
                        {/* <option value="3" >Defensas</option> */}
                        {/* <option value="4" >Cascos</option> */}
                        <option value="aro" >Aros</option>
                        {/* <option value="6" >Cambios de Banda</option> */}
                    </select>
                </div>
                <div className='filtro-texto d-flex flex-column'>
                    <button className='w-50 mx-auto btn btn-danger' onClick={handlerReset}>Borrar Filtro</button>
                    <img className='img-fluid' src={sierra} alt="reencauche" />
                    <div className='text-center mb-5'>
                        <h1>Mas vendido</h1>
                        <h2>Sierra 750X16 TM</h2>
                        <h3>$15/U</h3>
                        <a className="bg-danger p-4 text-light" href="!#">Adquirir <i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className='col-11 col-md-8 col-lg-8 mx-auto'>
                <div className='d-flex justify-content-start align-items-center ps-3 pe-5 pb-5 pt-5 flex-wrap'>
                    <strong><h1>Tipo</h1></strong>
                    <p className='pt-3 ps-5'>Reencauche</p>
                </div>
                {data.map((value) => {
                    const { id, marca, imagen, alt, nombre, clasificacion, unidades, precio, dolares, centavos } = value;
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
    )
}

export default ReencaucheEstructura