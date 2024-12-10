
import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Art from './components/Art';
import './components/Main.css';

const App: React.FC = () => {
    return (
        <div className={"all-container"}>
            <Navbar />
            <div className="main-container">
                <WelcomeSection />
                <About />
                <Experience />
                <Projects />
                <Art />
            </div>
        </div>
    );
};

export default App;
