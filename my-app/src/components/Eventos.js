import React, { Component } from "react";
import ModalEvents from "./ModalEvents";
import "./modal.css";
import { Button, ButtonToolbar } from "react-bootstrap";

export default class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    addModalClose = () => this.setState({ isOpen: false });

    render() {
        return (
            <section id="events">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Some events, where I was present</h1>
                        <div className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            src="images/events/meetup.jpg"
                                            alt="event-1"
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
                                    <ModalEvents
                                        show={this.state.isOpen}
                                        onHide={this.addModalClose}
                                    >
                                        <img
                                            src="images/events/meetup.jpg"
                                            alt="img1"
                                        />
                                    </ModalEvents>
                                </div>
                            </div>
                            {/* itens 01 */}
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            src="images/events/meetup.jpg"
                                            alt="event-1"
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
                                    <ModalEvents
                                        show={this.state.isOpen}
                                        onHide={this.addModalClose}
                                    ></ModalEvents>
                                </div>
                            </div>
                            {/* itens 02 */}
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            src="images/events/meetup.jpg"
                                            alt="event-1"
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
                                    <ModalEvents
                                        show={this.state.isOpen}
                                        onHide={this.addModalClose}
                                    ></ModalEvents>
                                </div>
                            </div>
                            {/* itens 03 */}
                            <div className="columns events-item">
                                <div className="item-wrap">
                                    <button
                                        onClick={() =>
                                            this.setState({ isOpen: true })
                                        }
                                        className="btn-iten"
                                    >
                                        <img
                                            src="images/events/meetup.jpg"
                                            alt="event-1"
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
                                    <ModalEvents
                                        show={this.state.isOpen}
                                        onHide={this.addModalClose}
                                    ></ModalEvents>
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
