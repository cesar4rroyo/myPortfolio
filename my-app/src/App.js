import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
