import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UseEffectCompo = () => {

  const [data, setData] = useState();
 
useEffect(() => {
  axios.get('https://ajax-fdba16.appdrag.site/api/getAllArticles', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data.Table);
  setData(response.data.Table)
});

  
}, [])

  return (
    <div className='container'>
      <h1>Hello UseEffect</h1>
      {
        data && data.map((row)=>( // pareil que: data?.map((row))....
         <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{row.title}</h2>
          <p>{row.articles}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UseEffectCompo
