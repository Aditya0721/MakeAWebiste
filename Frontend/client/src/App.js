import logo from './logo.svg';
import './App.css';
import Home from './Screens/HomeApp';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GymTemplate from './Templates/Gym/GymTemplate';
import TransportationTemplate from './Templates/Transportaion/TransportationTemplate';
import Template from './Templates/Template';
import Content from './Screens/Content';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Content/>}></Route>
          <Route path='content' element={<Content/>}/>
          <Route path='template' element={<Template/>}>
            <Route path='gym' element={<GymTemplate/>}/>
            <Route path='transportation' element={<TransportationTemplate/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
