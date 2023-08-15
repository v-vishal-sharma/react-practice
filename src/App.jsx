import './App.css'
import Navbar from "./components/Navbar"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Component from './pages/Component'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/component' element={<Component/>}/>
        </Routes>
    </>
  )
}

export default App
