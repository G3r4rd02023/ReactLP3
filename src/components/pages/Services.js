// Services.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from '../Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {


  const [data, setData]=useState([]);
  


   // submit event
   const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(titulo, contenido, fechaPublicacion, autor);

    // our object to pass
    
   
  }

  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/95aa461d-5301-46b8-920e-bdb1fb5497ed').then((response)=>{
      setData(response.data);
    })
  }

  useEffect(()=>{
    getData();
  },[data])

  return (
    <div className="container">
      
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