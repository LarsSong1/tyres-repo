import React from 'react'
import genesis from '../img/llantas/barum 185 60r14 5 grande.png'
import Subestructura from './subestructura'
import { useState } from 'react'
import Data from './data';




function ProductosLLantas() {
    const [data, setData] = useState(Data);



    function filtrarResultado() {
        let ancho = document.getElementById("ancho").value;
        const resultado = Data.filter((elemento) => {
            console.log(elemento.category);
            return elemento.category === ancho;

        }
        );
        setData(resultado);
        if (ancho === "all") {
            setData(Data);
        }


    }

    function handlerFilter() {
        let alto = document.getElementById("alto").value
        let ancho = document.getElementById("ancho").value;
        const filtro = Data.filter((elemento) => {
            return elemento.alto === alto &&elemento.category === ancho
            
        });
        
        setData(filtro)
        if (alto === "all") {
            setData(Data);
        }
    }

    function handlerRin() {
        let rin = document.getElementById("rin").value;
        let alto = document.getElementById("alto").value;
        let ancho = document.getElementById("ancho").value;
        const resultado = Data.filter((elemento)=>{
            return elemento.alto === alto &&elemento.category === ancho && elemento.rin === rin
            
        });
        setData(resultado);
        if (rin === "all") {
            setData(Data);
        }

    }

    function handlerReset (){
        setData(Data)
    }



    return (
        <div className='contenedor-productos d-flex flex-wrap justify-content-between'>
            <div className='contenedor-filtros col-11 col-md-3 col-lg-3 mx-auto mt-5 mb-5'>
                <h1 className='ps-3 pt-3'>Filtro</h1>
                <h5 className='text-center'>Ingrese datos en secuencia</h5>
                <div className='d-flex align-items-center flex-wrap'>
                    <p className='ps-3 me-3 pt-3'>A:</p>
                    <select class="form-select me-3" aria-label="Default select example" id='ancho' onChange={filtrarResultado}>
                        <option selected value="all">Ancho</option>
                        <option value="165" >165</option>
                        <option value="175" >175</option>
                        <option value="185" >185</option>
                        <option value="195" >195</option>
                        <option value="205" >205</option>
                        <option value="215" >215</option>
                        <option value="225" >225</option>
                        <option value="235" >235</option>
                        <option value="275" >275</option>
                        <option value="295" >295</    option>
                        <option value="750x16" >750x16</option>
                    </select>
                    <p className='ps-3 me-3 pt-3'>Al:</p>
                    <select class="form-select me-3" aria-label="Default select example" id='alto' onChange={handlerFilter}>
                        <option value="all" selected>Alto</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                        <option value="60">60</option>
                        <option value="65">65</option>
                        <option value="70">70</option>
                        <option value="75">75</option>
                        <option value="80">80</option>

                    </select>
                    <p className='ps-3 me-3 pt-3'>R:</p>
                    <select id="rin" class="form-select me-3" aria-label="Default select example" onChange={handlerRin}>
                        <option selected value="all">Rin</option>
                        <option value="12" >12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17,5">17.5</option>
                        <option value="22,5">22.5</option>
                        <option value="16PR">16PR</option>


                    </select>
                </div>
                <div className='filtro-texto d-flex flex-column'>
                    <button className='w-50 mx-auto btn btn-danger' onClick={handlerReset}>Borrar Filtro</button>
                    <img className='img-fluid' src={genesis} alt="genesis" />
                    <div className='text-center mb-5'>
                        <h1>Mas vendido</h1>
                        <h2>Barum GT</h2>
                        <h3>$75/U</h3>
                        <a className="bg-danger p-4 text-light" href="!#">Adquirir <i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className='col-11 col-md-8 col-lg-8 mx-auto'>
                <div className='d-flex justify-content-start align-items-center ps-3 pe-5 pb-5 pt-5 flex-wrap'>
                    <strong><h1>Ancho/Alto/Rin: </h1></strong>
                    <p className='pt-3 ps-5'>185/60 R14</p>
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



            </div >
        </div >

    );
};

export default ProductosLLantas;