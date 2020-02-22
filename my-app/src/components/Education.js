import React, { Component } from "react";

export default class Education extends Component {
    render() {
        return (
            <div class="row education">
                <div class="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div class="nine columns main-col">
                    <div class="row item">
                        <div class="twelve columns">
                            <h3>Pedro Ruiz Gallo National University</h3>
                            <p class="info">
                                Systems Engineering <span>&bull;</span>{" "}
                                <em class="date">2018-Present</em>
                            </p>
                            <p>
                                I am currently in the third year of my
                                professional career, being in university has
                                helped me to guide myself in my future, I have
                                learned some skills for software development, I
                                hope to continue learning more.
                            </p>
                        </div>
                    </div>

                    <div class="row item">
                        <div class="twelve columns">
                            <h3>Platzi</h3>
                            <p class="info">
                                Platzi Student <span>&bull;</span>{" "}
                                <em class="date">2018-Present</em>
                            </p>
                            <p>
                                Currently I am also a student of Platzi, the
                                largest online educational platform in Latin
                                America, here I learned a lot about web
                                development, especially in Front End
                                development, using technologies such as React
                                Js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
