// News.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
const [titulo, setTitulo]=useState('');
  const [contenido, setContenido]=useState('');
  const [fechaPublicacion, setFechaPublicacion]=useState('');
  const [autor, setAutor]=useState('');

  const [data, setData]=useState([]);

   // submit event
   const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(titulo, contenido, fechaPublicacion, autor);

    // our object to pass
    const data = {
      titulo,
      contenido,
      fechaPublicacion,
      autor
    };
    console.log('Datos a enviar:', data); 
    axios.post('https://sheet.best/api/sheets/1b460ff8-34f0-4ea1-a075-f44e0e24d75a',data).then(response=>{
       console.log(response);
      setTitulo('');
      setContenido('');
      setFechaPublicacion('');
      setAutor('');
    })
  }

  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/1b460ff8-34f0-4ea1-a075-f44e0e24d75a').then((response)=>{
      setData(response.data);
    })
  }

  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      <br></br>
      <h2 text-center>Crear una nueva publicacion</h2>
      <br></br>
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Titulo</label>
        <input type='text' className='form-control' required
          placeholder='Ingresa el titulo' onChange={(e)=>setTitulo(e.target.value)}
          value={titulo}
        />
        <br></br>
        <label>Contenido</label>
        <textarea
          className='form-control'
          required
          placeholder='Ingresa el contenido'
          onChange={(e) => setContenido(e.target.value)}
          value={contenido}
        />
        <br></br>
        <label>Fecha Publicacion</label>
        <input type='text' className='form-control' required
          placeholder='Ingresa la fecha'
          onChange={(e)=>setFechaPublicacion(e.target.value)}
          value={fechaPublicacion}
        />
        <br></br>
        <label>Autor</label>
        <input type='text' className='form-control' required
          placeholder='Ingresa el autor'
          onChange={(e)=>setAutor(e.target.value)}
          value={autor}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
          <button type='submit' className='btn btn-primary'>Guardar</button>
        </div>
      </form>
      <div className='view-data'>
        {data.length<1&&<>No hay datos que mostrar</>}
        {data.length>0&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Index</th>
                  <th scope='col'>Titulo</th>
                  <th scope='col'>Contenido</th>
                  <th scope='col'>Fecha Publicacion</th>
                  <th scope='col'>Autor</th>
                </tr>
              </thead>
              <tbody>
                <Data data={data}/>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;