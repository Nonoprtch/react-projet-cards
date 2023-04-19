import React, { useEffect, useState } from 'react'
import "./Main.css"
import axios from 'axios';

const UseEffectCompo = () => {
    const [data, setData] = useState();

   useEffect(()=>{
    
axios.get('https://ajax-fdba16.appdrag.site/api/getAllCard', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  setData(response.data.Table)
});
 
}, [] )

return (
    <div className='container bg-danger'>
        <h1>Mes projets </h1>
        {data?.map((row)=> (
            <div key={row.id}  className='bg-white shadow-lg rounded m-3 p-3'>
                <h2>{row.Title}</h2>
                <img className='img'
                src={row.Image} alt="" />
                <p>{row.Article} </p>
                hello
            </div>
        )

        )}
    </div>
)
}


export default UseEffectCompo;



//  onClick={()=> {UpdateName("ou pas")}}
// style={{height: 150, padding: "50px 10px"}}
