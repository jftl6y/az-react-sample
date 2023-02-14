import logo from './logo.svg';
import './App.css';

function App() {
  var result = BadSecret();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {result}
      </header>
      
    </div>
    
  );
}
function BadSecret(){
  var mySecretPassword = "12345";
  return(
    <div>
      <h1>My Super Secret Password is {mySecretPassword}</h1>
      <i>Don't tell anyone!</i>
    </div>
  )
}
export default App;
