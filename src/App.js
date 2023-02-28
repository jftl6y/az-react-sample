import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          
        </a>
        {BadSecret()}
      </header>
    </div>
  );
}
function BadSecret(){
  var mySecretPassword = "12345";
  /* <h1>My super secret password is {mySecretPassword}</h1>
      <i>Don't tell anyone!</i>  */
  return(
    <div>
      Hello

    </div>
  )
}
export default App;
