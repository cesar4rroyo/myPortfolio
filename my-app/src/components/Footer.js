import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com/cesar4rroyo">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/cesar4rroyo">
                                    <i className="fa fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/c%C3%A9sar-arroyo-torres-062283192/">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/cesar4rroyo/">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-dribbble" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-skype" />
                                </a>
                            </li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2020 CAT</li>
                            <li>
                                Design by <a href="#home">Cesar Arroyo</a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a
                            className="smoothscroll"
                            title="Back to Top"
                            href="#home"
                        >
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
