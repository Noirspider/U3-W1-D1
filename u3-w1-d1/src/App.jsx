import logo from "./logo.svg";
import "./App.css";
import SuperButtonComponent from "./components/SuperButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent src="https://i.gifer.com/7341.gif" alt="capra" className="App-logo rounded-circle" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
          <SuperButtonComponent buttonName="PIPPO" />
        </a>
      </header>
    </div>
  );
}

export default App;
