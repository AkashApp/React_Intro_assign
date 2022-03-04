// import logo from './logo.svg';
import './App.css';

function App() {
  let Op=["Android", "Blckberry", "iPhone", "Windows Phone"];
  let Manu= ["Samsung", "HTC", "Microsoft", "Apple"];
  return (
    <div>
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

      <div>
          <h1>Mobile Operating System</h1>
          <ul>{Op.map((e)=>(<li>{e}</li>))}</ul>
      </div>
      <div>
          <h1>Mobile Manufaturers</h1>
          <ul>{Manu.map((e)=>(<li>{e}</li>))}</ul>
      </div>
    </div>
  );
}

export default App;
