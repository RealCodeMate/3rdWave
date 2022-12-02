import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tedaviler from "./pages/Tedaviler/tedaviler";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Tedaviler />} path="/tedaviler" />
      </Routes>
    </div>
  );
}

export default App;
