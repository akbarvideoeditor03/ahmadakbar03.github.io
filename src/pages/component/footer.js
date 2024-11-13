import React from "react";
import { Link } from "react-router-dom";

function WebFooter() {
    return(
        <footer className="container row-f flex-1"> 
            <div className="container col-f flex-1">
                <p>Logo and Name</p>
            </div>
            <div className="container col-f footer-child">
                <p>Link-link Footer</p>
                <p>Link-link Footer</p>
                <p>Link-link Footer</p>
            </div>
            <div className="container col-f">
                <p>Link-link Footer</p>
                <p>Link-link Footer</p>
                <p>Link-link Footer</p>
            </div>
        </footer>
    )
}

export default WebFooter;