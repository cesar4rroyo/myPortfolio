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
                    <div id="title">DevFest Lima 2018</div>
                    <div className="video-contenedor">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/TAS1Cl2WfOc"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="descripcion_cont">
                        One of the largest technology events, held in the
                        Peruvian Capital, this event was the last of its
                        edition, held 2 years ago
                        <br />
                        <a href="https://www.youtube.com/watch?v=TAS1Cl2WfOc">
                            Show More
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-3")
    );
}
