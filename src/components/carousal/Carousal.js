import React from "react";
import './carousal.css'

function Carousal() {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <div class="carousel-caption ">
            
          </div>
          
          <img
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/nord-3-5g/1_Nord35G-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="phone1"
            
          />
         
        </div>
        <div class="carousel-item card" data-bs-interval="2000">
          <img
            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/kv-banner/nord-ce-3-5g/2_NordCE35G-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="phone2"
          />
          <div class="carousel-caption d-none d-md-block card-img-overlay">
            
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.oneplus.in/content/dam/oasis/page/2023/in/kv-banner/nord-buds-2r/3_NordBuds2r-tablet.jpg.thumb.webp"
            class="d-block w-100"
            alt="earphones"
          />
          <div class="carousel-caption d-none d-md-block">
            
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
