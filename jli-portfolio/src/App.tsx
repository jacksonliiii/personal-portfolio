// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Art from './components/Art';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <WelcomeSection />
            <About />
            <Experience />
            <Projects />
            <Art />
        </div>
    );
};

export default App;
