import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src="images/link1.jpg"
                            alt="..."
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            I am a student of Systems Engineering, coding is my
                            passion, every day I practice to improve my designs
                            and programming skills, every day I learn new
                            things, I am currently doing FrontEnd but in the
                            future I would like to be a Full Stack Developer, in
                            my time I like to play football, go out with my
                            friends and listen to loud music.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Cesar Arroyo</span>
                                    <br />
                                    <span>
                                        345 Antenor Orrego
                                        <br />
                                        Chiclayo, Lambayeque-Perú.
                                    </span>
                                    <br />
                                    <span>(+51) 924-734-626</span>
                                    <br />
                                    <span>cesardavid_09@hotmail.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="#" className="button">
                                        <i className="fa fa-download" />
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>{" "}
                        {/* end row */}
                    </div>{" "}
                    {/* end .main-col */}
                </div>
            </section>
        );
    }
}
