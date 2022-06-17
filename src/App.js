import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/Sections/Navbar';
import Footer from './Components/Sections/Footer';
import About from './Components/Pages/About';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';



function App() {
  return (
  
    <div className="App">
      <Navigation />
      <Container>
      <Routes>
        <Route path="/work" element={<Work />}>
        
        </Route>
        <Route path="/contact" element={<Contact />}>
         
        </Route>
        <Route path="/" element={<About />}>
      
        </Route>
      </Routes>
      </Container>
      < Footer />
    </div>
  
  );
}

export default App;
