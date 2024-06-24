import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path ="/" element={<Home/>} ></Route>
    <Route path ='/about' element={<About/>} ></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
 
  );
}

export default App;
