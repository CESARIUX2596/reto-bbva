import React, { Component } from "react";
import axios from "axios";
import "./css/content.css";
import * as styles from "./css/FileUpload.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <div class = "container"> 
                            <div class = "row">
                                <div class = "col-sm-12">
                                    <nav class="navbar navbar-default">
                                        <div class="container-fluid">
                                           
                                            <a class="navbar-brand" href="#">LOGO</a>
                                         
                                            <a class="active" href="#">INICIO</a>
                                            <a href="#">VAR PROYECT</a>
                                        </div>
                                     </nav>
                                </div>
                                <div class = "col-sm-6" >
                                    <h1>Cargar archivo</h1> 
                                </div>

                                <div class = "col-sm-6">
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
                                            className="btn btn-light"
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
                    </div>

        )
       
    }
}
export default Content;
