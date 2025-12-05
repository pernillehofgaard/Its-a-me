import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hobbies from './Pages/Hobbies';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/Hobbies" element={<Hobbies/>} />
    </Routes>
    <Routes>
      <Route path="/About" element={<About/>} />
    </Routes>
    <Routes>
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Routes>
      <Route path="/Projects" element={<Projects />} />
    </Routes>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
