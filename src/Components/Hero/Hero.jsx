import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <section className="section">
            <div className="container">
                <div className="hero-flex">
                    <div className="hero-content">
                        <h1> Note taking, made simple</h1>
                        <h3>Passionately made by student and for student. Noted, the all in one note taking app. </h3>
                        <button>Try for Free</button>
                    </div>

                    <div className="hero-image">
                        <img
                            src="https://img.freepik.com/premium-vector/woman-is-holding-clipboard-vector-illustration_1134986-13821.jpg"
                            alt="React Logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
