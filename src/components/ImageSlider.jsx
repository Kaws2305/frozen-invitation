import React, { useState } from "react";
import "../styles/ImageSlider.css";

export function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 50; // distancia mínima para detectar el swipe

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 👇 Detecta cuando el usuario toca la pantalla
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // 👇 Guarda la posición final del toque
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  // 👇 Determina la dirección del swipe al soltar
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      // deslizó hacia la izquierda → siguiente
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // deslizó hacia la derecha → anterior
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide ${index}`}
              className="slide-image"
            />
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
