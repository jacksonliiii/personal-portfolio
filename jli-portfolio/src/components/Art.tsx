// src/components/Art.tsx
import React from 'react';
import './Art.css';

const Art: React.FC = () => {
    return (
        <section className="art-section">
            <h2 className="section-title">Art</h2>

            <div className="art-gallery">
                <div className="art-piece">
                    <img src="path-to-art1.jpg" alt="Art 1" />
                </div>
                <div className="art-piece">
                    <img src="path-to-art2.jpg" alt="Art 2" />
                </div>
                <div className="art-piece">
                    <img src="path-to-art3.jpg" alt="Art 3" />
                </div>
            </div>

            {/* Minicomic Section */}
            <div className="minicomic">
                <h3>My Minicomic</h3>
                <img src="path-to-minicomic.jpg" alt="Minicomic Cover" className="minicomic-image" />
            </div>

            {/* Placeholder for Webcomic */}
            <div className="webcomic-placeholder">
                <h3>Aspiring to Publish My Own Webcomic</h3>
                <p>Coming eventually...</p>
            </div>
        </section>
    );
};

export default Art;
