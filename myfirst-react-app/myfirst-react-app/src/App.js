import logo from './logo.svg';
import './App.css';
import sayHello from './component/hello'

function App() {
  let name = "sam"
  // return JSX
  return (
    <div className="App">
      <header className="App-header">
      <h1>Adding a Header to my app!😮‍💨</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          yoo!! {name} is excided to hack in react.
        </p>
        {sayHello()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}



export default App;
