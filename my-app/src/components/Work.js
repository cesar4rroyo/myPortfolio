import React, { Component } from "react";

export default class Work extends Component {
    render() {
        return (
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Remote Work</h3>
                            <p className="info">
                                Freelancer <span>•</span>{" "}
                                <em className="date"> 2019 - Present</em>
                            </p>
                            <p>
                                I currently work as a Freelance, especially
                                development and web design projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
