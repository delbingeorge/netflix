import React from "react";
import "../Hero/Hero.css";

import netflixLogo from "../../images/logo/Netflix.png";
function Hero() {
    return (
        <div>
            <div className="hero-section">
                <header>
                    <div className="header-div">
                        <img src={netflixLogo} alt="Netflix Logo" />
                    </div>
                    <div className="header-btn">
                        <select>
                            <option>English</option>
                            <option>Malayalam</option>
                        </select>
                        <button> Sign Up</button>
                    </div>
                </header>
                <div className="hero-content">
                    <h1>
                        Unlimited movies, <br></br>TV shows and more.
                    </h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="email-submit">
                        <input type="email" placeholder="Email here"></input>
                        <button>Get Started ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
