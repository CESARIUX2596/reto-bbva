import React, { Component } from "react";
import axios from "axios";
import "./css/content.css";
import * as styles from "./css/FileUpload.module.css";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Logo from "./css/Imagenes/blanco.png";

class Content extends Component {
    state = {
        fileToUpload: undefined,
        uploadSuccess: undefined,
        error: undefined,
        timeStamp: undefined
    };
    
    uploadFile() {
        
        this.setState({timeStamp: Date.now()});

        // Getting the signed url
        axios(
            "https://qn32xzygmj.execute-api.us-west-2.amazonaws.com/develp?fileName="+ this.state.timeStamp +
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
z
    render() {
        return(
                
                    <div className={styles.fileUploadCont}>
                        <div className = "container"> 
                            <div className = "row">
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
                                        <Link to="/tablas">
                                        <button 
                                            type="button"
                                            className="procesar-info"
                                            onClick={e => {
                                                this.uploadFile();
                                            }}
                                        >
                                            Procesar Información
                                        </button>
                                        </Link>
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
                        
                    </div>

        )
       
    }
}
export default Content;
