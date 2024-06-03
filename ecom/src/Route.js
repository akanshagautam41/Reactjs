import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link, Router } from 'react-router-dom';
import Home from '../src/component/Home';
import Contact from '../src/component/Contact';
import About from '../src/component/About';

function Routers() {
    return (
      // <div className="App">
           
      // </div>
      <BrowserRouter>
      <Link to={"/"} >Home</Link> 
      <Link to={"/about"} >About</Link>
      <Link to={"/contact"} >Contact</Link>
  <Routes>
    <Route path='/' element={<Home/>} > </Route>
    <Route path='/contact' element={<Contact/>} > </Route>
    <Route path='/about' element={<About/>} > </Route>
  </Routes>
      </BrowserRouter>
    );
  }
  
  export default Routers;
  