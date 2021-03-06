import React from "react";
import ReactDom from "react-dom";
import "./modal.css";

export default function ModalEvents(props) {
    if (!props.show) {
        return null;
    }
    return ReactDom.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <div className="container">
                    <button
                        onClick={props.onHide}
                        className="Modal__close-button"
                    >
                        Close
                    </button>
                    <div id="title">Kotlin in Everywhere 2019</div>
                    <div className="img-contenedor">
                        <img
                            className="img-modal"
                            src="images/events/meetup.jpg"
                            alt=""
                        />
                    </div>
                    <div className="descripcion_cont">
                        <b>Kotlin / Everywhere</b> is a global series of events
                        led by the GDG community, where everyone interested can
                        learn about Kotlin best practices on Android, Google
                        Cloud Platform, and cross-platform development.
                        <br />
                        <a href="https://twitter.com/gdgcix">Show More</a>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
