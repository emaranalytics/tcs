import React from "react";

import HeroImage from '../images/header-2.png'

import './Hero.css'

const Hero = () => {
  return (
    <section class="hero">
        <div class="container">
                <div class="row">
                {/* left side */}
                    <div class="col-md-7">
                        <div class="home-text">
                            <h1>A Thinker, Big Fan Of SPA, Learner, Self-taught Developer</h1>
                            <p>
                                Welcome to my portfolio pages where you can review all works I've created.
                                I'd be glad to join your projects, collaborate with your teams, or even 
                                just talk and discuss about your problems to solve. Let us talk!
                            </p>

                            <div class="home-btn">
                                <button type="button" class="btn btn-light btn-hero" href="#home">Learn More</button>
                            </div>
                        </div>
                    </div>

                {/* right side */}
                    <div class="col-md-5">
                        <div class="home-img">
                            <img src={HeroImage} alt="hero" />
                        </div>
                    </div>

                    
                </div>
        </div>
    </section>
  );
};

export default Hero;
