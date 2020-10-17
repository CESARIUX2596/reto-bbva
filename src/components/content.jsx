import React, { Component } from "react";
import axios from "axios";
import "./css/content.css";
import * as styles from "./css/FileUpload.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./css/Imagenes/blanco.png";

class Content extends Component {
    state = {
        fileToUpload: undefined,
        uploadSuccess: undefined,
        error: undefined
    };
    
    
    uploadFile() {
        // Getting the signed url
        axios(
            "https://qn32xzygmj.execute-api.us-west-2.amazonaws.com/develp?fileName=" +
                this.state.fileToUpload.name
        ).then(response => {
            // Getting the url from response
            const url = response.data.fileUploadURL;

            axios({
                method: "PUT",
                url: url,
                data: this.state.fileToUpload,
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(res => {
                    this.setState({
                        uploadSuccess: "File upload successfull",
                        error: undefined
                    });
                })
                .catch(err => {
                    this.setState({
                        error: "Error Occured while uploading the file",
                        uploadSuccess: undefined
                    });
                });
        });
    }

    render() {
       
        return(
                
                    <div className={styles.fileUploadCont}>
                        <div className = "container"> 
                            <div className = "row">
                                <div className = "col-sm-1">
                                    <img className = "logo" src={Logo} alt="" width="120%"/>
                                </div>
                               
                                <div className = "col-sm-11">
                                    <nav className="navbar navbar-default">
                                        <div className="container-fluid menu-principal">
                                            <a className="active seleccionada" href="#">INICIO</a>
                                            <a className="non-selected" href="#">VAR PROYECT</a>
                                        </div>
                                     </nav>
                                </div>
                                <div className = "col-sm-6" >
                                    <h1>Cargar archivo</h1> 
                                </div>

                                <div className = "col-sm-6">
                                <form>
                                     <div className="form-group">
                                         <input
                                            type="file"
                                            className="form-control-file"
                                            id="fileUpload"
                                            onChange={e => {
                                                this.setState({
                                                    fileToUpload: e.target.files[0]
                                                });
                                            }}
                                         />
                                    
                                    {this.state.fileToUpload ? (
                                        <button 
                                            type="button"
                                            className="btn btn-light upload-info"
                                            onClick={e => {
                                                this.uploadFile();
                                            }}
                                        >
                                            Upload your file
                                        </button>
                                    ) : null}

                                    <div>
                                        <span>
                                            {this.state.uploadSuccess
                                                ? "File Upload Successfully"
                                                : ""}
                                        </span>
                                    </div>
                                </div>
                            </form>
                                </div>
                                                   
                            </div>
                        </div>
                        <button className = "procesar-info"> 
                                        Procesar Información{e => {
                                                this.uploadFile();
                                            }}
                        </button>
                    </div>

        )
       
    }
}
export default Content;
