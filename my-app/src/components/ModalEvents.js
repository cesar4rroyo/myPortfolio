import React, { Component } from "react";
import ReactDom from "react-dom";
import "./modal.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function ModalEvents(props) {
    if (!props.show) {
        return null;
    }
    return ReactDom.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onHide} className="Modal__close">
                    X
                </button>
                <div className="Modal__titulo"> TITULO </div>
                {props.children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}
