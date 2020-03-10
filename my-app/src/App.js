import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Eventos from "./components/Eventos";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Eventos />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
