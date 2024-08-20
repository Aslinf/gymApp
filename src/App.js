import './App.css';
import "./Stylesheets/global.scss";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import AboutPage from './Pages/AboutPage';
import Price from './Pages/Price';
import ClassesPage from './Pages/ClassesPage';
import ContactPage from './Pages/ContactPage';
import Schedule from './Pages/Schedule';
import GalleryPage from './Pages/GalleryPage';
import Monday from './components/SchedulePage/Monday';
import Tuesday from './components/SchedulePage/Tuesday';
import Thursday from './components/SchedulePage/Thursday';
import Wednesday from './components/SchedulePage/Wednesday';
import Friday from './components/SchedulePage/Friday';
import Saturday from './components/SchedulePage/Saturday';
import Sunday from './components/SchedulePage/Sunday';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/schedule" element={<Schedule />} >
          <Route path='/schedule/monday' element={<Monday />}/>
          <Route path='/schedule/tuesday' element={<Tuesday />}/>
          <Route path='/schedule/wednesday' element={<Wednesday />}/>
          <Route path='/schedule/thursday' element={<Thursday />}/>
          <Route path='/schedule/friday' element={<Friday />}/>
          <Route path='/schedule/saturday' element={<Saturday />}/>
          <Route path='/schedule/sunday' element={<Sunday />}/>
        </Route>
        <Route path="/pricing" element={<Price />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
