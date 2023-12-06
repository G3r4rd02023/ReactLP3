import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videos from './videos/video-2.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={videos} autoPlay loop muted /> 
      <h2>Noticias y Publicaciones</h2>
      <p>Estas listo para verlas?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Comencemos
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Ver más <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;