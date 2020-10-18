import React, { Component } from "react";
import "./css/tablas.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Logo from "./css/Imagenes/blanco.png";

class Tablas extends Component {
    state = {
        timeStamp:  undefined,
        fileToUpload: undefined,
    };
  render() {

    return (
        <div>
             <div className ="container">
                 <div className = "pdf">
                    <button className = "descargar"> 
                        Descargar PDF
                    </button>
                    <div className = "tabla">
                            <table>
                                <tr>
                                <th></th>
                                <th>Fecha</th>
                                <th>Unidaded de Medida</th>
                                <th>Caja y Banco</th>
                                <th>Total Activo</th>
                                <th>Total Pasivo</th>
                                <th>Total Patrimonio</th>
                                <th>Ventas</th>
                                <th>Costos de Ventas</th>
                                <th>Unidad Bruta</th>
                                <th>Unidad Operacional</th>
                                <th>Unidades Antes de Impuestos</th>
                                <th>Unidad Meta</th>
                                </tr>
                                <tr className = "fila">
                                <td>Doc 1</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                                <tr className ="fila1">
                                <td>Doc 2</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                                <tr className ="fila">
                                <td>Doc 3</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                                <tr className ="fila1">
                                <td>Doc 4</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                                <tr className ="fila">
                                <td>Doc 5</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                                <tr className ="fila1">
                                <td>Doc 6</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                </tr>
                            </table>
                        </div>
                </div>
                    </div>
                </div>  
    );
  }
}

export default Tablas;
