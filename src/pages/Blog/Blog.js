import React, { useState, useEffect } from 'react';
import axios from 'axios';   
import Navbar from '../../components/NavBar/Navbar';
import { Link } from 'react-router-dom';

const UseEffectCompo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://ajax-fdba16.appdrag.site/api/GetMyBlog', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function(response) {
      console.log(response.data);
      setData(response.data.Table);
    });
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <h1 className='titre'></h1>
      {data.map((row) => (
        <Link className="text-decoration-none text-dark " to={`/article/${row.id}`}>
          <div key={row.id} className='bg-white shadow-lg rounded m-3 p-3'>
            <h2>{row.Title}</h2>
            <img src={row.Image} alt="" />
            <p>{row.Article} </p>
            <p>{row.Auteur}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default UseEffectCompo;

  
  