import React, { Component } from "react";
import "./css/proyecto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./css/Imagenes/original.png";
import Rafa from "./css/Imagenes/Rafa.png";
import Shamira from "./css/Imagenes/shamira.png";
import Ivannia from "./css/Imagenes/ivannia.png";
import RafaV from "./css/Imagenes/RafaV.png";
import Dulce from "./css/Imagenes/dulce.png";
import Laptop from "./css/Imagenes/laptop.png";

class Proyecto extends React.Component {

  render() {

    return (
        <div>
              <div  className = "container">
                <div className = "row">
                    <div className = "col-sm-1">
                        <img className = "logo" src={Logo} alt="" width="120%"/>
                    </div>
                    <div className = "col-sm-11">
                        <div className="container-fluid menu-principal">
                            <a className="active seleccionada" href="#">INICIO</a>
                            <a className="non-selected" href="#">VAR PROYECT</a>
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <div className = "col-sm-12 titulo-a">
                         <h1>Nuestro equipo</h1>
                    </div>
                </div>
             </div>
             <div className = "container">
                 <div className = "row">
                     <div className = "col-sm-4">
                        <img className = "rafa" src={Rafa}  alt="" width="60%"/>
                            <p className = "nombre-r"> Rafael Reyes</p>
                            <p className = "carrera-r">Ing. Ciencias Computacionales</p>
                     </div>
                     <div className = "col-sm-4">
                        <img className = "rafa" src={Shamira}  alt="" width="60%"/>
                            <p className = "nombre-s"> Shamira Macias</p>
                            <p className = "carrera-d">Ing. Diseño Gráfico Digital</p>
                     </div>
                     <div className = "col-sm-4">
                        <img className = "rafa" src={Rafa}  alt="" width="60%"/>
                            <p className = "nombre-c"> César Torres</p>
                            <p className = "carrera-r">Ing. Ciencias Computacionales</p>
                     </div>
                 </div>
                 <div className = "row">
                     <div className = "col-sm-4">
                        <img className = "rafa" src={Ivannia}  alt="" width="60%"/>
                            <p className = "nombre-i"> Ivannia Arellano</p>
                            <p className = "carrera-d">Ing. Diseño Gráfico Digital</p>
                     </div>
                     <div className = "col-sm-4">
                        <img className = "rafa" src={RafaV}  alt="" width="60%"/>
                            <p className = "nombre-r"> Rafael Velarde</p>
                            <p className = "carrera-r">Ing. Sistemas Computacionales</p>
                     </div>
                     <div className = "col-sm-4">
                        <img className = "rafa" src={Dulce}  alt="" width="60%"/>
                            <p className = "nombre-d"> Dulce Angulo</p>
                            <p className = "carrera-d">Ing. Diseño Gráfico Digital</p>
                     </div>
                 </div>
             </div>
             <div className = "azul">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-sm-6">
                            
                        </div>
                        <div className = "col-sm-6">
                            <img className = "laptop" src={Laptop}  alt="" width="120%"/>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
    );
  }
}

export default Proyecto;
