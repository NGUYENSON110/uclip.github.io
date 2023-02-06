import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/home";
import Popular from "../pages/popular/popular";
import Suggest from "../pages/suggest/suggest";
import Sidebar from '../components/sidebar/sidebar';
import SidebarMoblie from '../components/sidebarMoblie/sidebarMoblie';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function routes() {
    return (

        <div>
            {
                isBrowser ?
                    <BrowserView>
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
                    </BrowserView>

                    

                    : <MobileView>
                        <BrowserRouter >
                            <div style={{ display: 'row' }}>
                                <SidebarMoblie />
                                <Routes>
                                    <Route path='/' element={<Home />} />
                                    <Route path='/popular' element={<Popular />} />
                                    <Route path='/suggest' element={<Suggest />} />
                                </Routes>
                            </div>
                        </BrowserRouter>
                    </MobileView>
            }

        </div>





    )
}

export default routes;