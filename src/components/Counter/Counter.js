import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `le compteur est a ${counter}`
    },[counter]);

    const Increment = () => {
        setCounter(counter +1)
    }
    const Decrement = () => {
        setCounter(counter -1)
    }
    const Reset = () => {
        setCounter(0)
    }


    return (
        <div>
            <div> {counter}</div>
            <button  onClick={()=> Increment()}  >Increment +</button>
            <button onClick={()=> Decrement()}>Decrement -</button>
            <button onClick={()=> Reset()}>Reset</button>
        </div>
    )
}

export default Counter
