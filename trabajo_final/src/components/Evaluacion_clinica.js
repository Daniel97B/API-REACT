import React from 'react'
import '../css/evalluacion_clinica.css'

import { Link } from "react-router-dom";
const Evaluacion_clinica = () => {
    return (
        <div>
            <main class="row">

                <div class="col-1 azul">
                    <p></p>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light azul p-1 col">

                    <img src={require('../img/logo.jpg').default} alt="ahora" height="60px"></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">
                                    <h class="blanco Eras-ITC">INICIO</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/CLASES">
                                    <h class="blanco Eras-ITC">CLASES</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/COMPLENTARIO">
                                    <h class="blanco Eras-ITC">COMPLEMENTARIOS</h>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/CONTACTOS">
                                    <h class="blanco Eras-ITC">CONTACTOS</h>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <Link class="nav-link active" to="/LOGUEO">
                        <h class="rojo Eras-ITC">INICIO DE SESION</h>
                    </Link>

                    <Link class="nav-link active" to="">
                        <h class="rojo Eras-ITC">REGISTRO</h>
                    </Link>

                </nav>

                <div class="col-1 azul">
                    <p></p>
                </div>

            </main>
            <br></br>
            <aside class="row">

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">EVALUACI??N CL??NICA</h2>
                        <p>Una completa evaluaci??n sobre tu condici??n y cualidades f??sicas te permite establecer objetivos
                            claros que alcanzar??s con un programa de entrenamiento dise??ado a tu medida.</p>
                        <p>Servicios incluidos en cualquier clase deportiva</p>
                    </div>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="banner">
                    <img class="banner " src={require("../img/evaluacion clinica.jpg").default} height="500px" alt=""></img>
                </section>

                <section class="col-md-10 col-lg-10 offset-lg-1 col-xs-10 col-sm-10" id="Bienvenidos">
                    <div class="contenedor Franklin-Gothic">
                        <h2 class="Eras-ITC">SERVICIOS</h2>
                        <p>-Conocer la frecuencia cardiaca en la que debes trabajar para obtener mayores resultados.</p>
                        <p>-Prevenir lesiones.</p>
                        <p>-Mejorar tu postura.</p>
                        <p>-Saber si tienes alg??n riesgo muscular, postural y de flexibilidad para tratarlo con el
                            entrenamiento.</p>
                    </div>
                </section>

            </aside>

            <br></br>



            <footer class="row text-center text-light p-0 m-0" >
                <div class="col-12 p-0 m-0">
                <p class="p-3">
                    <img src={require('../img/w3c.png').default} class="p-0" alt="certificado W3C"></img>
                        ?? TODOS LOS DERECHOS RESERVADOS A KEVIN , MICHAEL , IVAN BARON
                        CONTACTOS:3223304871
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Evaluacion_clinica
