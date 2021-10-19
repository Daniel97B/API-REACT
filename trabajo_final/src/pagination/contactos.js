/* Ficha: 2252471
Aprendices: Kevin Fraile, Michael Muñoz y Ivan Baron
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

import '../css/contactos.css';
import React from 'react';
import { Link } from "react-router-dom";
const Contactos = () => {
    return (
        <>

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

                    <Link to="/LOGUEO">
                        <h class="rojo Eras-ITC">Logueo</h>
                    </Link>

                </nav>
                <br></br>
                <br></br>
            </header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4005290508503!2d-73.62527748573716!3d4.141364347407739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2dd8a475c4ab%3A0xe68b9373189b1502!2sGym%20Style!5e0!3m2!1ses!2sco!4v1616685368316!5m2!1ses!2sco"
                            height="400" width="100%" allowfullscreen="" loading="lazy">
                        </iframe>

                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>

                </div>

                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>
                    <div class="col-3 borde-arriba-abajo-izquierda centrar-texto  tamañoletra">


                        <h5 class="azul-letra Franklin-Gothic">CONTACTO</h5>
                        <h class="rojo-letra Franklin-Gothic"> 3138409361</h>

                    </div>

                    <div class="col-3 borde-arriba-abajo centrar-texto tamañoletra">



                        <h5 class="azul-letra Franklin-Gothic">DIRECCION</h5>
                        <h class="rojo-letra Franklin-Gothic"> Cra 3 # 17b-2, Mosquera</h>

                    </div>

                    <div class="col-4 borde-arriba-abajo-derecha centrar-texto tamañoletra">

                        <h5 class="azul-letra Franklin-Gothic">CORREO</h5>
                        <h class="rojo-letra Franklin-Gothic"> Gymstyles @gmali.com</h>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>
                </div>

                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col borde-abajo-izquierda-derecha centrar-texto">
                        <h3 class="azul-letra Franklin-Gothic"> Horario de apertura</h3>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>
                </div>


                <div class="row">

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col borde-abajo-izquierda-derecha centrar-texto ">
                        <h5 class="azul-letra Franklin-Gothic"> LUNES A DOMINGO :</h5>
                        <h5 class="rojo-letra Franklin-Gothic"> 6AM-9PM</h5>
                    </div>

                    <div class="col-1">
                        <p></p>
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
        
        </>
    )
}
export default Contactos;