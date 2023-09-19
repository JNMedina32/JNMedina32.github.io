import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./assets/styles/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
