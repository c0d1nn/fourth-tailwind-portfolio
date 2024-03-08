import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route index element={<Hero/>}/>
          <Route path="/Hero" element={<Hero/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
