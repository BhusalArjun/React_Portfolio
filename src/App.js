import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import HomePage from './pages/Home';
import AboutMePage from './pages/About';
import ServicesPage from './pages/certificatess/Certificate';
import HyperTextPage from './pages/certificatess/HyperText';
import CascadingPage from './pages/certificatess/Cascading';
import JScriptPage from './pages/certificatess/JScript';
import ReeactPage from './pages/certificatess/Reeact';
import JaavaPage from './pages/certificatess/Jaava';
import PortfoliosPage from './pages/Portfolios';
import MyResumePage from './pages/MyResume';
// import AppointmentPage from './pages/Appointment';
import PageNotFoundPage from './pages/404';


const App = () => {
    return (
        <BrowserRouter>
            <div className='wraper'>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/about-me' element={<AboutMePage />} />
                    <Route path='/certificate' element={<ServicesPage />} />
                        <Route path='/hypertext' element={<HyperTextPage/>}/>
                        <Route path='/cascading' element={<CascadingPage/>}/>
                        <Route path='/jscript' element={<JScriptPage/>}/>
                        <Route path='/reeact' element={<ReeactPage/>}/>
                        <Route path='/jaava' element={<JaavaPage/>}/>
                    <Route path='/portfolios' element={<PortfoliosPage />} />
                    <Route path='/my-resume' element={<MyResumePage />} />
                    {/* <Route path='/book-appointment' element={<AppointmentPage />} /> */}
                    <Route path='*' element={<PageNotFoundPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;