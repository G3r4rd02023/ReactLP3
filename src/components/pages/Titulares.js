import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Titulares.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Titulares() {
  return (
    
    <div>
       <Carousel autoPlay={true} interval={3000} stopOnHover={true} infiniteLoop={true}>
      <div>
        {/* Contenido del primer slide */}
        <h1 className='deporte'>Educación</h1>
        <div className="stillimage"> 
          <div className="stillimage-main">
            <div className="left">
              <div className="landing-desc">
                <p></p>
                <p>
                El pequeño país que tiene la mejor educación del mundo según las pruebas PISA (y cómo están los de América Latina en la clasificación) <span> </span>
                </p>
                <p>
                La educación singapurense recuperó su sitial como la mejor del mundo y lo hizo con contundencia.

                Los estudiantes de la pequeña ciudad-estado asiática obtuvieron los mejores resultados en las pruebas del Programa 
                para la Evaluación Internacional de los Alumnos (PISA, por sus siglas en inglés), que cada tres años realiza la 
                Organización para la Cooperación y el Desarrollo Económicos (OCDE), con el propósito de medir las habilidades y 
                conocimientos de los estudiantes de 15 años en lectura, matemáticas y ciencias.
                </p>
              </div>
            </div>
            
            <div className="right">
              <div className="col2">
                <img
                  src="https://ichef.bbci.co.uk/news/800/cpsprodpb/d88e/live/1e69ab90-9381-11ee-8319-bdafcbf63490.jpg"
                  draggable="false"
                  alt="girl3"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/* Puedes agregar más slides según sea necesario */}
      
      <div>
        {/* Contenido del segundo slide */}
        <h1 className='deporte'>Internacionales</h1>
        <div className="stillimage"> 
          <div className="stillimage-main">
            <div className="left">
              <div className="landing-desc">
                <p></p>
                <p>
                Tensión entre Venezuela y Guyana: Maduro moviliza al Ejército y anuncia la anexión por ley del Esequibo <span> </span>
                </p>
                <p>
                El mandatario venezolano nombra a un diputado del partido gobernante como autoridad provisional del territorio en disputa
                </p>
              </div>
            </div>
            
            <div className="right">
              <div className="col2">
                <img
                  src="https://imagenes.elpais.com/resizer/vutTMasRlnbyan1SuHHpNoW4HhE=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZLVOH5EDOFA47FSLXCRZR4A7WA.jpg"
                  draggable="false"
                  alt="girl3"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/* Puedes agregar más slides según sea necesario */}

      <div>
        {/* Contenido del segundo slide */}
        <h1 className='deporte'>Deportes</h1>
        <div className="stillimage"> 
          <div className="stillimage-main">
            <div className="left">
              <div className="landing-desc">
                <p></p>
                <p>
                El Real Madrid abordará el futuro de Carlo Ancelotti en marzo <span> </span>
                </p>
                <p>
                Las relaciones entre Carlo Ancelotti y la cúpula del Real Madrid en esta segunda época del italiano 
                en el banquillo muestran algunas diferencias acusadas respecto de las de la primera época.
                </p>
              </div>
            </div>
            
            <div className="right">
              <div className="col2">
                <img
                  src="https://imagenes.elpais.com/resizer/2NybCuCQBkH-BhPUNKp8fmxKjJI=/1200x0/filters:focal(1743x616:1753x626)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/DQSNIF2YCBGPRESBY4RSX6M36Y.jpg"
                  draggable="false"
                  alt="girl3"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div>
        {/* Contenido del segundo slide */}
        <h1 className='deporte'>Salud</h1>
        <div className="stillimage"> 
          <div className="stillimage-main">
            <div className="left">
              <div className="landing-desc">
                <p></p>
                <p>
                Qué son los hongos medicinales y qué beneficios tienen realmente para la salud <span> </span>
                </p>
                <p>
                Tienen nombres como melena de león, cola de pavo, chaga, reishi y seta de cardo.
                 Y se han vuelto cada vez más populares como suplementos y polvos que dicen curar 
                 todo tipo de malestares.

                Son los llamados hongos medicinales, o funcionales. 
                Son extractos de hongos que han sido utilizados desde hace miles de años en la medicina
                tradicional china y ahora aparecen frecuentemente en occidente como una tendencia de moda 
                para la salud y el bienestar.
                </p>
              </div>
            </div>
            
            <div className="right">
              <div className="col2">
                <img
                  src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9db9/live/390bf2f0-8ddc-11ee-b152-b98e460f52a3.jpg"
                  draggable="false"
                  alt="girl3"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div>
        {/* Contenido del quinto slide */}
        <h1 className='deporte'>Tecnologia</h1>
        <div className="stillimage"> 
          <div className="stillimage-main">
            <div className="left">
              <div className="landing-desc">
                <p></p>
                <p>
                Las cuentas inactivas que Google borrará a partir de este 1 de diciembre (y cómo evitarlo si tienes una) <span> </span>
                </p>
                <p>
                Si tienes una cuenta de Google que no hayas usado en el último par de años, podrías perderla.

                El gigante tecnológico anunció que se deshará de cuentas inactivas a partir de este viernes 1ro de diciembre, siguiendo sus políticas internas.

                La compañía dijo que el enfoque es de una eliminación gradual, es decir, que empezará con las cuentas que "se crearon y nunca más se usaron".

                Con simplemente iniciar sesión en la cuenta o usarla para enviar un correo electrónico debería ser suficiente para mantenerla activa.
                </p>
              </div>
            </div>
            
            <div className="right">
              <div className="col2">
                <img
                  src="https://ichef.bbci.co.uk/news/800/cpsprodpb/E95B/production/_131893795_gettyimages-1247111347.jpg"
                  draggable="false"
                  alt="girl3"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </Carousel>
      
      <Footer/>
    </div>
  );
}

export default Titulares;