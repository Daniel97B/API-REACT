/* Ficha: 2252471
Aprendices: Kevin Fraile, Michael Muñoz y Ivan Baron
Objetivo: Desarrolar una pagina web funcional para un gimnasio con HTML5, JavaScripts, CSS y Bootstrap5*/

import '../css/sesion.css';
import React from 'react';
import { Link } from "react-router-dom";
const Logueo = () => {
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
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-7">
                        <br></br>
                        <h2 class="rojo-sesion">INICIO DE SESION</h2>
                            <form>
                                <label for="" class="rojo-sesion"> CORREO </label><br></br>
                                <input type="email" id="I-CORREO" class="campo" ></input><br></br>
                                <label for="" class="rojo-sesion"> CONTRASEÑA</label><br></br>
                                <input type="password" id="I-CONTRASENNA" class="campo" ></input><br></br><br></br><br></br>

                                <a type="button" value="INGRESAR" class="bt-cancelar " id="INGRESAR" href="http://localhost:8081/CRUD" >INGRESAR</a><br></br>

                            </form>

                    </div>

                   

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col-1">
                        <p></p>
                    </div>

                    <div class="col-10 col-md-4 borde-azul margen-abajo p-4">
                        <br></br>

                        <h2 class="azul-registro">REGISTRO</h2>
                        <form >
                            <label for="" class="azul-registro"> NUMERO DE DOCUMENTO </label>
                            <br></br>

                            <input type="number" id="NUMERO-DE-DOCIMENTO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> NOMBRE*</label>
                            <br></br>

                            <input type="text" id="NOMBRE" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> APELLIDO</label>
                            <br></br>

                            <input type="text" id="APELLIDO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro campo2">GENERO </label>
                            <br></br>
                            <select name="" id="GENERO" class="campo">

                                <option value="" class="azul-text ">MASCULINO</option>
                                <option value="" class="azul-text ">FEMENINO</option>
                                <option value="" class="azul-text ">OTRO</option>

                            </select> <br></br>

                            <label for="" class="azul-registro campo2"> FECHA DE NACIMIENTO</label>
                            <br></br>

                            <input type="date" id="FECHA-DE-NACIMIENTO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> CORREO*</label>
                            <br></br>

                            <input type="email" id="CORREO" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> CIUDAD</label>
                            <br></br>

                            <input type="email" id="CIUDAD" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> TELEFONO</label>
                            <br></br>

                            <input type="email" id="TELEFONO" class="campo" ></input>
                            <br></br>

                            <label for="" class="azul-registro"> CONTRASEÑA*</label>
                            <br></br>

                            <input type="password" id="CONTRASEÑA" class="campo" required></input>
                            <br></br>

                            <label for="" class="azul-registro"> CONFIRMAR CONTRASEÑA</label>
                            <br></br>

                            <input type="password" id="CONFIRMAR-CONTRASEÑA" class="campo" ></input>
                            <br></br>

                            <input type="checkbox" id="" required></input>

                            <label for="" class="azul-registro"> TERMINOS Y CONDICIONES</label>

                            <br></br>
                            <br></br>
                            <br></br>


                            <a type="button" value="REGISTRARME" class="bt-listo" id="REGISTRARME" onClick="crearUsuario()">REGISTRARME</a>

                            <br></br>


                        </form>

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
export default Logueo;