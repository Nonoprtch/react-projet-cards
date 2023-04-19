import React from 'react'
import Header from "../../components/Header/Header"
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation'
import Main from '../../components/Main/Main'

const Cv = () => {
    
    const [name, setName] = React.useState("Noa Partouche");

    const HandleName = (cb) => {
       setName(cb)
    }

  return (
    <div className="">
      <header>
        <Header name={name} />
        <Navbar />
      </header>

      <SectionPresentation  />
      <Main
         HandleName={HandleName}
       />

      <Footer name={name} />
    </div>
  )
}

export default Cv

