/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import './css/sesion.css';

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";

function Crud() {
  return (
    <Router>
      <header>
        {/* Creamos el nav donde iran los links de redirecion */}
        <nav class="nav fixed-top">
          {/* Insertamos img */}
          <img src={require('./img/logo.jpg').default} alt="ahora" height="60px"></img>
          {/**Insertamos Boton hamburguesa para ocultar el nav */}
          {/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          <div class="collapse navbar-collapse" id="navbarNav">*/}
          {/* Creamos lista de ingreso */}
          <ul class="menu">
            {/* Creamos link */}

            <li>
              <Link to={"/CRUD"} className="">
                <a class="blanco Eras-ITC">ENTRENADORES</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="Eras-ITC">
                <a class="blanco Eras-ITC">
                  CREAR
                </a>
              </Link>
            </li>
          </ul>
          {/*</div>*/}
          {/* Button de salir
           */}
          <div class="Log">
            <a href="/" class="blanco Eras-ITC">
              <h class="rojo Eras-ITC">SALIR</h>
            </a>
          </div>
        </nav>
        <br></br>
        <br></br>
      </header>

      <p></p>
      <br></br>

      <div className="container mt-3">

        <Switch>
          <Route exact path={["/", "/CRUD"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default Crud;