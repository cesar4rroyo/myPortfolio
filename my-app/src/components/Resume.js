import React, { Component } from "react";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                <Education />
                <Work />
                <Skills />
                <Portfolio />
            </section>
        );
    }
}
