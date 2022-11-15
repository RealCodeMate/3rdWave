import { Routes, Route } from "react-router-dom";
import Header from "./compenents/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
      </Routes>
    </div>
  );
}

export default App;
