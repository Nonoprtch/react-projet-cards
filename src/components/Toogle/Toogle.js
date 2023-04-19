import React,  { useState } from 'react'

const Toogle = () => {

    const [toogle, setToogle] = useState(false);

    const ActivToogle = () => {
        setToogle(!toogle)
    }

  return (
    <div>
      HEllo touglle

    
        { toogle === true &&
             <div>Coucou</div>
        }

        <button onClick={()=> ActivToogle()} >Click ici </button>
      


    </div>
  )
}

export default Toogle
