import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {BadSecret()}
        
      </header>
    </div>
  );
}
function BadSecret(){
  var password = "12345";
  //return the password var in response

  return(
    <div>
      <h1>My password is {password} </h1>
      <p>Don't tell anyone!</p>
    </div>
  )
}

export default App;
