/* Ficha: 2252471
Aprendices: Kevin Fraile, Michael Muñoz y Ivan Baron
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/clases.css';
import { Link } from "react-router-dom";

const Clases = () => {

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
            <Router>

                <div class="container-fluid">


                    <div class="col-1 ">
                        <p></p>
                    </div>
                    <div class="row">

                        <div class="col-1 ">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0" id="cycl">

                            <img class=" img-fluid m-arriba" src={require('../img/hit cycling.jpg').default} alt=""
                                width="100%"></img>

                            <div>


                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>


                        <div class="col-10 col-md-3 p-0 mx-auto" id="bung">

                            <img class=" img-fluid m-arriba" src={require('../img/bungge.png').default} alt="" width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>


                        <div class="col-10 col-md-3 p-0" id="aero">

                            <img class=" img-fluid der-f m-arriba" src={require('../img/aerobicos.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-sm-none d-md-block">
                            <p></p>
                        </div>

                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-1 ">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0" id="yoga">

                            <img class=" img-fluid izq-f m-arriba" src={require('../img/yoga.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <button href="#" class="posicion-bt1" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">MAÑANA</button>

                                <a class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0 mx-auto" id="boxe">

                            <img class=" img-fluid m-arriba" src={require('../img/boxeo.jpg').default} alt="" width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>

                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-block d-sm-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-1 d-none d-sm-block d-md-none">
                            <p></p>
                        </div>

                        <div class="col-10 col-md-3 p-0 " id="trx">

                            <img class=" img-fluid der-f m-arriba" src={require('../img/trx.jpg').default} alt=""
                                width="100%"></img>

                            <div>

                                <a href="#" class="posicion-bt1" data-bs-toggle="modal" data-bs-target="#exampleModal">MAÑANA</a>

                                <a href="#" class="posicion-bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">TARDE</a>

                                <a href="#" class="posicion-bt3" data-bs-toggle="modal" data-bs-target="#exampleModal">NOCHE</a>

                            </div>
                        </div>

                        <div class="col-1 d-sm-none d-md-block">
                            <p></p>
                        </div>

                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-header">

                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                </div>

                                <div class="modal-body texto-iniciasesion Franklin-Gothic">
                                    <h3>REGISTRATE O INICIA SESION PRIMERO</h3>
                                </div>

                                <br /><br /><br />


                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
                <footer class="row text-center text-light p-0 m-0" >
                <div class="col-12 p-0 m-0">
                <p class="p-3">
                    <img src={require('../img/w3c.png').default} class="p-0" alt="certificado W3C"></img>
                        © TODOS LOS DERECHOS RESERVADOS A KEVIN , MICHAEL , IVAN BARON
                        CONTACTOS:3223304871
                    </p>
                </div>
            </footer>
            </Router>
        </>
    )
}
/* eslint-disable react/jsx-no-undef */
export default Clases;