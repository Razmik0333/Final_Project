import { Routes, Route } from "react-router-dom";

import './App.css';
import About from "./components/context/about";
import News from "./components/context/news";
import Registrations from "./components/context/registrations";
import Header from './components/header';




function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element = {<Home />} /> */}
        <Route path="/about" element = {<About />} />
        <Route path="/registration" element = {<Registrations />} />
        <Route path="/news" element = {<News />} />
      </Routes>
    </>
  );
}
export default App;
