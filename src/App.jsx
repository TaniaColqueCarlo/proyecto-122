import { Routes, Route } from 'react-router-dom'
import Bienvenida from './paginas/Bienvenida'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PaginaLenguaje from './paginas/PaginaLenguaje'
import SobreMi from './paginas/SobreMi'

function App() {
  return (
    <>
      <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ut non autem similique repudiandae ab impedit commodi, porro minima error.</h3>
      <NavBar />
      <Routes>
        <Route index={true} element={<Bienvenida />} />
        <Route path='lenguaje/:id' element={<PaginaLenguaje />} />
        <Route path='about' element={<SobreMi />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App