import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./css/content.css";

class Content extends Component {
    render() {
        return (
            <div class="content">
                <h3>Aqui va Contenido</h3>
            </div>
        );
    }
}
export default Content;
