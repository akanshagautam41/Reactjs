import logo from './logo.svg';
import './App.css';
import Krishna from './Krishna';
import Banner from './Banner';
import Product from './Product';
import Akansha from './Akansha';
import Stat from './Stat';
import Prop from './Prop';
// import 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      
      
    }
    <Krishna />
    {/* <Banner></Banner>
    <Product></Product>
    <Akansha/> */}
    <br />
    <br />
   {/* <Stat></Stat> */}
   <Prop title={"Black Panther: Wakanda Forever"} subtitle={"Men Low Top Sneakers"} price={"2499"} im={"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690474428_4792405.jpg?format=webp&w=480&dpr=1.0"} />
   

    
    </div>
  );
}

export default App;
