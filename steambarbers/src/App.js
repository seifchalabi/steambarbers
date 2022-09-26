import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./pages/home";
import logo from "./images/logo.png";
import {Services} from "./pages/services";

function App() {
  return (
    <>
      <nav className='nav'>
        <Link to = "/"><img src = {logo} alt = "Logo" height = "98" width = "125"  /></Link>
        <ul>
          <li>
            <Link to = "/services">Services</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/services" element = {<Services />} />
      </Routes>
    </>
  );
}

export default App;
