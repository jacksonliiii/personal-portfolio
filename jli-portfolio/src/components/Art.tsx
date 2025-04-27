// src/components/Art.tsx
import React from 'react';
import './Art.css'; // Assuming you'll style the section
import art3 from '../assets/MIRAI3.png'
import art1 from '../assets/SHY.jpg'
import art2 from '../assets/CHRISTMAS.png'
import 'font-awesome/css/font-awesome.css';

const Art: React.FC = () => {
    return (
        <section id={"art"} className="art-section">
            <h2 className="section-title">Art</h2>

            {/* Art Gallery */}
            <div className="art-gallery">
                <div className="art-piece">
                    <img src={art1} alt="Art 1" />
                </div>
                <div className="art-piece">
                    <img src={art2} alt="Art 2" />
                </div>
                <div className="art-piece">
                    <img src={art3} alt="Art 3" />
                </div>
            </div>

            {/* Instagram link */}
            <div className="instagram-link">
                <p>If you're feeling adventurous, come check out more of my art on my
                    <a href="https://instagram.com/pinekonei" target="_blank" rel="noopener noreferrer">
                        Instagram!
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Art;
