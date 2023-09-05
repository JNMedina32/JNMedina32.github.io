import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, createContext, useReducer, useEffect } from "react";
import "./assets/styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";


import { userReducer, initialStateDark } from "./components/userReducer";

export const UserContext = createContext();

function App() {
  const [initialState, setInitialState] = useState(false);

  const [userState, userDispatch] = useReducer(userReducer, initialStateDark);
 

  useEffect(() => {
    if (initialState) {
      userDispatch({ type: "masterLightOn" });
    } else {
      userDispatch({ type: "masterLightOff" });
    }
  }, [initialState]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      <NavBar initialState={initialState} setInitialState={setInitialState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </UserContext.Provider>
  );
}

export default App;
