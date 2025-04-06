import React from "react";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import './index.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-title">FIN RISK ASSESSMENT</div>
        <div className="navbar-links">
          <a href="#past">Past</a>
          <a href="#present">Present</a>
          <a href="#future">Future</a>
          <Button className="navbar-button">Button</Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to ___.</h1>
        <p className="hero-subheading">
          Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling. Blurb
        </p>

        {/* Tarot Section */}
        <div className="tarot-section">
          <h2 className="tarot-title">Take a look into your...</h2>
          <div className="tarot-cards">
            <div id="past" className="tarot-card">
              <h3 className="tarot-card-title">Past</h3>
              <Card className="card">
                <CardContent className="card-content">
                  <img
                    src="/images/past.png"
                    alt="Past Tarot Card"
                    className="tarot-image"
                  />
                </CardContent>
              </Card>
            </div>
            <div id="present" className="tarot-card">
              <h3 className="tarot-card-title">Present</h3>
              <Card className="card">
                <CardContent className="card-content">
                  <img
                    src="/images/present.png"
                    alt="Present Tarot Card"
                    className="tarot-image"
                  />
                </CardContent>
              </Card>
            </div>
            <div id="future" className="tarot-card">
              <h3 className="tarot-card-title">and Future</h3>
              <Card className="card">
                <CardContent className="card-content">
                  <img
                    src="/images/future.png"
                    alt="Future Tarot Card"
                    className="tarot-image"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
