import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Home() {
  
  return (
    <>
      <HeroSection />
      <Carousel autoPlay={true} interval={3000} stopOnHover={true} infiniteLoop={true}>
                <div>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/001/626/668/original/a-digital-representation-of-a-compass-by-the-globe-in-a-blue-background-free-video.jpg" />
                </div>
                <div>
                  <img src="https://img.freepik.com/vector-gratis/fondo-estudio-noticias-realista_52683-103246.jpg?w=2000" alt="Imagen 2" />
                </div>
               
                <div>
                  <img src="https://englishlive.ef.com/es-es/blog/wp-content/uploads/sites/12/2019/03/shutterstock_1204164946-min.jpg" alt="Imagen 4" />
                </div>
                
              </Carousel>
      <Footer />
    </>
  );
}

export default Home;