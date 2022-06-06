// import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/js/bootstrap";
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from "./Navbar";
import { Route, Routes , Navigate } from 'react-router-dom';
import Footer from "./Footer";

function App() {
  return (
    <>
    <Navbar/>
   <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/service' element={<Service/>} />
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;


