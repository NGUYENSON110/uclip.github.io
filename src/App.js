import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home";
import Popular from "./pages/popular/popular";
import Suggest from "./pages/suggest/suggest";
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    
    <BrowserRouter >
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/suggest' element={<Suggest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
