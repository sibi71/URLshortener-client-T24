import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ShortURL from "./pages/ShortURL/ShortURL"
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Footer  from "./pages/Footer/Footer"
import Header from './components/Header/Header'
import Private from './components/Private/Private'
import Verify from './pages/Verify/Verify'
import FWD from './pages/FWD/FWD'
import Reset from './pages/Reset/Reset'
const App = () => {
  return (
   <Router>
    <Routes>
    <Route path='/' element={ 
    <>
    <Header />
    <Home/>
    <Footer />
    </>
    } >
    </Route>
    <Route element = {<Private />}>
    <Route path='/view' element={ <ShortURL />} ></Route>
    </Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/signup' element={<Signup />} ></Route>
    <Route path='/user/verify/:token' element={<Verify />} />
    <Route path='/fwd'element={<FWD />} />
    <Route path='/reset/:email' element={<Reset/>} />
    </Routes>
   </Router>
  )
}

export default App