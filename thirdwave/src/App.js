import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Treatments from "./pages/Treatments/Treatments";
import Gallery from "./pages/Gallery/Gallery";
import Faq from "./pages/Faq/Faq";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Treatments />} path="/treatments" />
        <Route element={<Treatments />} path="/treatments/:string" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<Faq />} path="/faq" />
      </Routes>
    </div>
  );
}

export default App;
