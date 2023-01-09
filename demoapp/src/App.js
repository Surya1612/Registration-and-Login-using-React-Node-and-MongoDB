import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home'
import './App.css'


export default function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
      <Route exact path='/home' element={<Home />}></Route>
      {/* <Route path='/signup' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route> */}
     </Routes>
     
     </div>
     </BrowserRouter>
  )
  

}
