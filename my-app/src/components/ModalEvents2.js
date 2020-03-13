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
                    <div id="title">DevFest Piura 2019</div>
                    <div className="img-contenedor">
                        <img
                            className="img-modal"
                            src="images/events/modals/devFest19.jpg"
                            alt="aaaa"
                        />
                    </div>
                    <div className="descripcion_cont">
                        New Edition of <b>Devfest</b> , the event that brings
                        together the community of developers and technology
                        enthusiasts in the region. Held on Saturday October 12
                        in the city of Piura
                        <br />
                        <a href="https://twitter.com/hashtag/DevFestPiura?src=hashtag_click">
                            Show More
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-2")
    );
}
