import React from 'react';
import '../css/marcas.css'
import hankook from '../img/marcas/hankook.svg'
import barum from '../img/marcas/barum.svg'
import goodyear from '../img/marcas/goodyear.svg'
import marshal from '../img/marcas/marshal.svg'
import maxis from  '../img/marcas/maxis.svg'
import continental from '../img/marcas/continental-54 1.svg'
import caucho_sierra from  '../img/marcas/caucho sierra 1.svg'

function Marcas() {
  return (
    <div class="contenedor-m container-fluid">
        <div class="row">
            <hr />
            <h1>Marcas</h1>
        </div>
        <div class="marcas row d-flex align-items-center">
            <div class="contenedor-marcas">
                <img className='img-fluid hankook' src={hankook} alt="hankook" />
                <img className='img-fluid barum' src={barum} alt="barum" />
                <img className='img-fluid goodyear' src={goodyear} alt="goodyear" />
                <img className='img-fluid marshal' src={marshal} alt="marshal" />
                <img className='img-fluid maxxis' src={maxis} alt="maxis" />
                <img className='img-fluid continental' src={continental} alt="continental" />
                <img className='img-fluid caucho' src={caucho_sierra} alt="caucho sierra" />
            </div>
        </div>
    </div>
  )
}

export default Marcas;