import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
