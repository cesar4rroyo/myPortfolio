import React, { Component } from "react";

export default class Skills extends Component {
    render() {
        return (
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                        Below, I present some of my skills in both general
                        programming, development and web design.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            <li>
                                <span className="bar-expand html5" />
                                <em>HTML5</em>
                            </li>
                            <li>
                                <span className="bar-expand jquery" />
                                <em>JavaScript</em>
                            </li>
                            <li>
                                <span className="bar-expand css" />
                                <em>CSS</em>
                            </li>
                            <li>
                                <span className="bar-expand illustrator" />
                                <em>Java</em>
                            </li>
                            <li>
                                <span className="bar-expand photoshop" />
                                <em>Photoshop</em>
                            </li>
                            <li>
                                <span className="bar-expand wordpress" />
                                <em>Wordpress</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
