import React, { Component } from "react";
import ModalEvents from "./ModalEvents";
import ModalEvents2 from "./ModalEvents2";
import ModalEvents3 from "./ModalEvents3";
import "./modal.css";

export default class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false
        };
    }

    TITLE_EVENT1 = "DevFest Piura 2019";
    DES_1 = "Tech Event";
    SRC_1 = "images/events/meetup.jpg";
    SRC_2 = "images/events/modals/devFest2019.jpg";

    addModalClose = () => this.setState({ isOpen: false });
    addModalClose2 = () => this.setState({ isOpen2: false });
    addModalClose3 = () => this.setState({ isOpen3: false });
    addModalClose4 = () => this.setState({ isOpen4: false });

    render() {
        return (
            <section id="events">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Some events, where I was present</h1>
                        <div className="bgrid-thirds s-bgrid-thirds cf">
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            className="img__event"
                                            src={this.SRC_1}
                                            alt="event-1"
                                        />
                                        <div className="overlay">
                                            <div className="events-item-meta">
                                                <h5>
                                                    {" "}
                                                    Kotlin in Everywhere 2019{" "}
                                                </h5>
                                                <p> {this.DES_1} </p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </button>
                                    <ModalEvents
                                        show={this.state.isOpen}
                                        onHide={this.addModalClose}
                                    ></ModalEvents>
                                </div>
                            </div>
                            {/* itens 01 */}
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen2: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            className="img__event"
                                            src="images/events/modals/devFest19.jpg"
                                            alt="event-2"
                                        />
                                        <div className="overlay">
                                            <div className="events-item-meta">
                                                <h5>DevFest Piura 2019</h5>
                                                <p>Tech Event</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </button>
                                    <ModalEvents2
                                        show={this.state.isOpen2}
                                        onHide={this.addModalClose2}
                                    ></ModalEvents2>
                                </div>
                            </div>
                            {/* itens 02 */}
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen3: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <iframe
                                            class="img__video"
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/TAS1Cl2WfOc"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                        <div className="overlay">
                                            <div className="events-item-meta">
                                                <h5>DevFest Piura 2019</h5>
                                                <p>Tech Event</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </button>
                                    <ModalEvents3
                                        show={this.state.isOpen3}
                                        onHide={this.addModalClose3}
                                    ></ModalEvents3>
                                </div>
                            </div>
                            {/* itens 04 */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
