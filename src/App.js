import React from 'react';
import './App.css';
import Routes from "./Routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from "./pages/home/home";
// import Popular from "./pages/popular/popular";
// import Suggest from "./pages/suggest/suggest";
// import Sidebar from './components/sidebar/sidebar';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {
  return (
    <Routes />
    // <BrowserRouter >
    //   <div  style={{ display: 'flex' }}>
    //     <Sidebar />
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/popular' element={<Popular />} />
    //       <Route path='/suggest' element={<Suggest />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
