/* eslint-disable jsx-a11y/anchor-is-valid */
/* Ficha: 2252471
Aprendices: Kevin Fraile, Michael Muñoz y Ivan Baron
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/
import '../css/incio.css';
import React from 'react';
import { Link } from "react-router-dom";
const Complementario = () => {
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
            </header>
            {/*Cremos container de contenido de las imagenes */}
            <br />
            <div class="container-fluid">

                <br></br>
                <div class="row">
                
                    <div class="row ">
                        <div class="col-12 blancs">
                            <h1 class="verde">
                                Ejercicios Complementarios
                            </h1>
                        </div>
                        <div class="col-12 blancs  justify-content-center">
                            <div class="row justify-content-center">
                                <div class="col-9">
                                    <samp class="texto">
                                        Si quieres tener un cuerpo perfecto, ejercicios complementarios que no debes faltar en tu vida diaria
                                        Equilibre y evite posibles lesiones.
                                        <br></br>

                                        No hacer ejercicios complementarios puede ser uno de los mayores fracasos
                                        Producido en el mundo de las actividades deportivas y deportivas.
                                        <br></br>

                                        En el presente y en el futuro, la mayoría de los deportistas, deportistas o practicantes de cualquier estilo deportivo se centran en practicar su forma específica. Porque puede correr para corredores, andar en bicicleta para ciclistas o en un mundo del fitness que se centra en los principales grupos musculares.
                                        <br></br>

                                        Sin embargo, existe algo llamado ejercicios complementarios, que es la clave para mejorar nuestro rendimiento, que a su vez nos permite seguir entrenando y disfrutar de nuestras actividades físicas. Además, minimice las posibles lesiones.
                                    </samp>
                                </div>


                                <div class="col-3">
                                    <img src={require('../img/complementario.jpg').default} class="img-fluid" alt="más tarde" id="ya" ></img>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-1">
                        <p></p>
                    </div>


                    <div class="col-10 col-md-3 p-0 ">

                        <div class="contenedor">
                            <figure>
                                <img src={require('../img/zonaestiramiento.jpg').default} class=" img-fluid m-arriba" alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>



                    <div class="col-10 col-md-3 mx-auto p-0">
                        <div class="contenedor">
                            <figure>
                                <img class=" img-fluid m-arriba" src={require('../img/zonacardiovascular.jpg').default} alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>



                    <div class="col-10 col-md-3 p-0 ">
                        <div class="contenedor">
                            <figure>
                                <img class=" img-fluid m-arriba der-f" src={require('../img/zonamusculacion.jpg').default} alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>

                    <div class="col-1 ">
                        <p></p>
                    </div>

                </div>

                <br></br>

                <div class="row">

                    <div class="col-1 ">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <div class="contenedor">
                            <figure>
                                <img class=" img-fluid m-arriba izq-f" src={require('../img/clasesgrupales.jpg').default} alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>




                    <div class="col-10 col-md-3 mx-auto p-0">
                        <div class="contenedor">
                            <figure>
                                <img class=" img-fluid m-arriba" src={require('../img/zonashumedas.jpg').default} alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>

                    <div class="col-10 col-md-3 p-0 ">
                        <div class="contenedor">
                            <figure>
                                <img class=" img-fluid m-arriba der-f" src={require('../img/artesmarcialesmixtas.jpg').default} alt="" width="100%"></img>
                                <div class="capa">
                                    <h1>
                                        Medicina General
                                    </h1>
                                    <p class="p"> La medicina general es el primer nivel de atención médica y es necesaria para la prevención, detección, tratamiento y seguimiento de enfermedades</p>
                                </div>
                            </figure>
                        </div>

                    </div>

                    <div class="col-1 ">
                        <p></p>
                    </div>

                </div>

                <br></br>

                <br></br>


                <footer class="row text-center text-light p-0 m-0" >
                    <div class="col-12 p-0 m-0">
                        <p class="p-3">
                            <img src={require('../img/w3c.png').default} class="p-0" alt="certificado W3C"></img>
                            © TODOS LOS DERECHOS RESERVADOS A KEVIN , MICHAEL , IVAN BARON
                            CONTACTOS:3223304871
                        </p>
                    </div>
                </footer>
            </div>

        </>
    )
}
export default Complementario;