import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Productpage from './pages/Productpage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Contactpage from './pages/Contactpage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/aboutpage' element={<Aboutpage/>}/>
    <Route path='/productpage' element={<Productpage/>}/>
    <Route path='/loginpage' element={<Loginpage/>}/>
    <Route path='/registerpage' element={<Registerpage/>}/>
    <Route path='/contactpage' element={<Contactpage/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App

