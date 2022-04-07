import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Detail from '../components/Detail';
import Home from '../components/Home';
import Login from '../components/Login';


function Routers() {
  return (
      
      <BrowserRouter>
    
         <Routes>
         <Route path='/' element= {<Home/>} />
         <Route path='/detail' element = {<Detail/>}/>
         <Route path='/login' element = {<Login/>}/>
        </Routes>
     </BrowserRouter>

  )
}

export default Routers