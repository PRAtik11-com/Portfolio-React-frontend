import {Route, Routes } from 'react-router-dom';
import Portfolio from '../Pages/Portfolio';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';

const Mainroute = () => {
  return (
   <>
      <Routes>
       
        <Route path="/" element={<Portfolio />} />
        <Route path="/Projects" element={ <Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
      </>

  );
};


export default Mainroute
