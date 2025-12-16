import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./hero.css";

export default function Hero() {
  return (
    <section
      className="banner vh-100 overflow-hidden position-relative"
      id="hero"
      aria-label="HRT Incorporadora"
    >
      <div
        id="bannerCarousel"
        className="carousel slide carousel-vertical h-100"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Slides */}
        <div className="carousel-inner w-100 h-100">
          <div className="carousel-item active position-relative w-100 h-100">
            {/* Background com gradiente */}
            <div className="overlay-gradient"></div>

            {/* Texto sobreposto */}
            <div className="banner-text container text-white text-start">
              <h2>
                A arte de<br />
                construir<br />
                valor!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
