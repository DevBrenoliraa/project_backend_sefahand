import React, { useState } from 'react';
import './styles.css'

import box from '../../assets/svg/iconBox.svg'

const EpiCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const epiItems = [
    {
      id: 1,
      nome: "Luva de Proteção Látex",
      lote: "LUV13298BA",
      quantidade: 20
    },
    {
      id: 2,
      nome: "Óculos de Proteção",
      lote: "OPT56789XY",
      quantidade: 15
    },
    {
      id: 3,
      nome: "Máscara Descartável",
      lote: "MASK12345ZZ",
      quantidade: 50
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === epiItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? epiItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="estoque-epi">
      <div className="title-epi">
        <img src={box} alt="Ícone estoque"/>
        <p>Estoque de EPI</p>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {/* <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button> */}
          
          <div className="carousel-content">
            <div className="box-epi">
              <div className="text-epi">
                <h1>{epiItems[currentIndex].nome}</h1>
                <div className="text-lote">
                  <p>Lote: {epiItems[currentIndex].lote}</p>
                  <button>
                    <p>{epiItems[currentIndex].quantidade}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
{/*           
          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button> */}
        </div>
        
        {/* Indicadores */}
        <div className="carousel-indicators">
          {epiItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpiCarousel;