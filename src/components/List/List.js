import React, {useState} from 'react'

const List = () => {

    const [list, setList] = useState([{
        id: 1, 
        coursImportant :  "React js "
    }, {
        id: 2, 
        coursImportant :  "html css"
    }, {
        id: 3, 
        coursImportant :  "vanilla javascript"
    }]);



  return (
    <div>
      <h1>List des cours les plus importants</h1>
      {
        list.map((cour, index)=> (
            <div key={index}>
                {cour.coursImportant}
            </div>
        ))
      }
    </div>
  )
}

export default List
