import React, { Component } from "react";
import "./css/proyecto.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./css/Imagenes/original.png";
import Rafa from "./css/Imagenes/Rafa.png";
import Shamira from "./css/Imagenes/shamira.png";
import Ivannia from "./css/Imagenes/ivannia.png";
import RafaV from "./css/Imagenes/RafaV.png";
import Dulce from "./css/Imagenes/dulce.png";
import Cesar from "./css/Imagenes/Cesar.png";
import Ofinista from "./css/Imagenes/oficinista.png";
import LogoA from "./css/Imagenes/logoAzul.svg";
import VarN from "./css/Imagenes/varteamName.svg";

class Proyecto extends React.Component {

  render() {

    return (
        <div>
              <div  className = "container">
                <div className = "row">
                    <div className = "col-sm-1">
                        <img className = "logo" src={Logo} alt="" width="200%"/>
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
                        <img className = "varN" src={VarN}  alt="" width="20%"/>
                    </div>
                </div>
             </div>
             <div className = "container equipo">
                 <div className = "row fotos-a">
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
                        <img className = "rafa" src={Cesar}  alt="" width="60%"/>
                            <p className = "nombre-c"> Cesar Torres</p>
                            <p className = "carrera-r">Ing. Ciencias Computacionales</p>
                     </div>
                 </div>
                 <div className = "row fotos-b">
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
                 <div className = "col-sm-8">
                            <img className = "oficinista" src={Ofinista}  alt="" width="85%" />
                        </div>
             </div>
    
             <div className = "azul">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-sm-6">
                             <img className = "logo-a" src={LogoA}  alt="" width="40%"/>
                             <p className = "text-a">
                             Un mundo digital de procesos manuales…
                             </p>
                             <p className = "text-a">
                             El reto que hemos seleccionado para el Hackaton BBVA 2020 fue el Interpretador Inteligente en donde se ha definido que el problema consiste en las dificultades del proceso actual el cual radica en los riesgos de la manipulación manual de datos e información ya que con base en estos se dictamina la posibilidad o negación de crédito. 
                             </p>
                             <p className = "text-a">
                             El objetivo que proponemos para dicho proyecto consiste en una solución digital para  procesar, almacenar y categorizar la información de documentos con la finalidad de optimizar los procesos basados en la identificación, extracción y compilación de la información.
                             </p>
                             <button className = "ver-video"> 
                                            Ver proyecto {e => {
                                                this.uploadFile();
                                            }}
                                     
                        </button>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
    );
  }
}

export default Proyecto;
