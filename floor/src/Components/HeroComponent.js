import React from 'react'
import hero1 from '../images/hero/herocarousel1.jpg'
import hero2 from '../images/hero/herocarousel2.jpg'
import hero3 from '../images/hero/herocarousel3.jpg'
import hero4 from '../images/hero/herocarousel4.jpg'
import hero5 from '../images/hero/herocarousel5.jpg'

export default function HeroComponent() {
  return (
    <section id="hero" class="hero">

    <div class="info d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a data-aos="fade-up" data-aos-delay="200" href="#get-started" class="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>

    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

      <div class="carousel-item active" style={{backgroundImage:`url(${hero1})`}}></div>
      <div class="carousel-item" style={{backgroundImage:`url(${hero2})`}}></div>
      <div class="carousel-item" style={{backgroundImage:`url(${hero3})`}}></div>
      <div class="carousel-item" style={{backgroundImage:`url(${hero4})`}}></div>
      <div class="carousel-item" style={{backgroundImage:`url(${hero5})`}}></div>

      <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>

  </section>
  )
}
