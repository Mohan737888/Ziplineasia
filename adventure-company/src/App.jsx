import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
 import Products from "./pages/Products";
 import Projects from "./pages/Projects";
 import Contact from "./pages/Contact";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

       

      </Routes>

    </>
  );
}

export default App;