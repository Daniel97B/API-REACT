/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Ficha: 2252471
Aprendices: Kevin Fraile, Michael Muñoz y Ivan Baron
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

import '../css/FuncionNav.css';
import { Link } from "react-router-dom";
import React from 'react';

const asesoria = () => {

    return (
        <body>
            {/* Creamos un header donde ira la parte del nav */}
            <header>
                {/* Creamos el nav donde iran los links de redirecion */}
                <nav class="nav fixed-top">
                    {/* Insertamos img */}
                    <img src={require('../img/logo.jpg').default} alt="ahora" height="60px"></img>
                    {/* Creamos lista de ingreso */}
                    <ul class="menu">
                        {/* Creamos link */}
                        <li>
                            <Link to="/">
                                <a class="blanco Eras-ITC">INICIO</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/CLASES">
                                <a class="blanco Eras-ITC">CLASES</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/COMPLENTARIO">
                                <a class="blanco Eras-ITC">COMPLEMENTARIOS</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/CONTACTOS">
                                <a class="blanco Eras-ITC">CONTACTOS</a>
                            </Link>
                        </li>
                    </ul>
                    {/* Button de logueo */}
                    <div class="Log">
                    <Link to="/LOGUEO">
                        <a class="rojo Eras-ITC">Logueo</a>
                    </Link>
                    </div>
                   

                </nav>
                <br></br>
                <br></br>
            </header>
            {/* Creamos donde se encuentra todo el contenido*/}
            <div class="container-fluid">
                <br></br>
                {/* Creamos fila donde insertaremos un carrusel */}
                <div class="row">
                    <div class="col-12 mx-12 p-0">

                        <div class="bd-example">

                            <div id="carouselExampleDark" class="carousel carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                                </div>
                                {/* Creamos los espacios donde iran las iamgenes del carrusel */}
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="2000">

                                        <svg width="100%" height="500" role="img" class="primero" >
                                        </svg>

                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <svg width="100%" height="500" role="img" class="segundo">
                                        </svg>

                                        <div class="carousel-caption d-none d-md-block">
                                        </div>

                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <svg width="100%" height="500" role="img" class="tercero" >
                                        </svg>

                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                                {/* Botones del carrusel (anterior) */}
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                {/* Botones del carrusel(siguiente) */}
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
                <p></p>
                <div class="row centro justify-content-center">
                    <div class="row">
                        <h1 class="verde">!No lo pienses más¡, empieza ya </h1>
                    </div>
                    <p></p>
                    <div class="col-9 blancs">

                        <img src={require('../img/zonamusculacion.jpg').default}  class="img-fluid" alt="más tarde" id="ya" ></img>
                        <samp class="texto">
                            Así como es fundamental para nuestra salud alimentar a nuestro cuerpo a diario, es importante hacer ejercicio a diario.
                            <br></br>

                            El sistema de vida sedentario y los problemas (físicos, metabólicos, obesidad, etc.) se han convertido en un problema de salud que ya ha trastornado a las administraciones públicas.

                            Realizar actividad física diaria aporta muchos beneficios a nuestra salud, mejora nuestro estado físico, reduce el riesgo de enfermedades cardiovasculares.
                            <br></br>

                            El ejercicio regular no solo previene problemas cardiovasculares antes, sino que también ayuda a tratar los factores de riesgo de enfermedades cardiovasculares que ya están presentes, como diabetes, hipertensión y niveles de lípidos o perfil de lípidos (colesterol y niveles en sangre). LDL y triglicéridos).
                            Nos permite mantener un peso saludable o adelgazar si tenemos sobrepeso.
                        </samp>
                        <br></br>
                    </div>
                    <p></p>
                </div>
                <br></br>
                {/* Espacion donde iran las cards */}
                <div class="row nav active logo bg-dark" >
                    <h1 class="verde">¿Que ofrecemos?</h1>

                    <div class="row justify-content-center">
                    
                    {/* Creamos cards */}
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                    {/* Yoga */}
                        <div class="col">
                            <div class="card h-100 bg-dark">
                                    {/* Incertamos la imagen */}
                                    <img src="https://www.cuerpomente.com/medio/2020/07/08/1144083_c928ba70_1280x1610.jpg" class="card-img-top" height="300px"></img>
                                <div class="card-body" >
                                    <p class="card-text"><h2>Yoga</h2>
                                        Ofrecemos esta práctica de yoga para mejorar la salud en general ya que utiliza posturas físicas, ejercicios de respiración y meditación.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Aumento Muscular */}
                        <div class="col">
                            <div class="card h-100 bg-dark">
                                     {/* Incertamos la imagen */}
                                    <img src="https://www.puntofape.com/wp-content/uploads/2017/05/Masa-muscular.jpeg" class="card-img-top" height="300px" ></img>
                                <div class="card-body">
                                    <p class="card-text"><h2>Aumento Muscular</h2>
                                    Los ejercicios para aumentar la masa muscular mejoran nuestras hanilidades y movilidad ya que contribuye a regular los niveles de glucosa, colesterol y triglicéridos.</p>
                                </div>
                            </div>
                        </div>

                        {/* Resistencia */}
                        <div class="col">
                            <div class="card h-100 bg-dark">
                                     {/* Incertamos la imagen */}
                                    <img src="https://i.blogs.es/c98181/1366_2000-9-/450_1000.jpeg" class="card-img-top" height="300px" ></img>
                                <div class="card-body">
                                    <p class="card-text"><h2>Resistencia</h2>
                                    Se ofrece rutinas y ejercicios que son encargadas de desarrollar esa capacidad de aguante que naturalmente tiene nuestro cuerpo, pero que perdemos por no cultivarla adecuadamente.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tips */}
                        <div class="col">
                            <div class="card h-100 bg-dark">
                                     {/* Incertamos la imagen */}
                                    <img src="https://blog.smartfit.com.mx/wp-content/uploads/2021/02/rutina-de-gym-para-piernas-y-gluteos-.png" class="card-img-top" height="300px" ></img>
                                <div class="card-body">
                                    <p class="card-text"><h2>Tips</h2>
                                    Para gym Styles su salud es importante, se brindaran algunos Tips y Consejos  saludables para tener una buena alimentacion y mejor salud e su dia a dia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <footer class="row text-center text-light p-0 m-0" >
                <div class="col-12 p-0 m-0">
                <p class="p-3">
                    <img src={require('../img/w3c.png').default} class="p-0" alt="certificado W3C"></img>
                        © TODOS LOS DERECHOS RESERVADOS A KEVIN , MICHAEL , IVAN BARON
                        CONTACTOS:3223304871
                    </p>
                </div>
            </footer>
        </body>

    );

}

export default asesoria;