import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Product from './Product';
import Services from './Services';
import Menu from './Menu';
import Facts from './Facts';
import News from './News';
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
      </header> */}
<Banner/>
<Product/>
<Services />
<Menu />
<Facts />
<News />
    </div>
  );
}

export default App;
