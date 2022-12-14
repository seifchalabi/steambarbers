import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/home";
import {Contact} from "./pages/contact"
import {Services} from "./pages/services";
import {Navbar} from './components/navbar';
import {About} from "./pages/about"
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/services" element = {<Services />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
