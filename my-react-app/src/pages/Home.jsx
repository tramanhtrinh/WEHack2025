import React from "react";
import { Card, CardContent } from "../components/Card";
import '../index.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-title">Arcana Assets</div>
        <div className="navbar-links">
          <a href="/past">Past</a>
          <a href="/present">Present</a>
          <a href="/future">Future</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Arcana Assets!</h1>
        <p className="hero-subheading">
          Master your money with insights that matter. Track your spending, manage your current investments, and see the future of your finances. Arcana Assets makes financial literacy simple, empowering you to make smarter choices and build a better future.
        </p>

        {/* Tarot Section */}
        <div className="tarot-section">
          <h2 className="tarot-title">Take a look into your...</h2>
          <div className="tarot-cards">
            {/* PAST */}
            <div className="tarot-card">
              <h3 className="tarot-card-title">Past</h3>
              <a href="/past" className="tarot-link">
                <Card className="card">
                  <CardContent className="card-content">
                    <img
                      src="/images/past.png"
                      alt="Past Tarot Card"
                      className="tarot-image"
                    />
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* PRESENT */}
            <div className="tarot-card">
              <h3 className="tarot-card-title">Present</h3>
              <a href="/present" className="tarot-link">
                <Card className="card">
                  <CardContent className="card-content">
                    <img
                      src="/images/present.png"
                      alt="Present Tarot Card"
                      className="tarot-image"
                    />
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* FUTURE */}
            <div className="tarot-card">
              <h3 className="tarot-card-title">Future</h3>
              <a href="/future" className="tarot-link">
                <Card className="card">
                  <CardContent className="card-content">
                    <img
                      src="/images/future.png"
                      alt="Future Tarot Card"
                      className="tarot-image"
                    />
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 