import logo from './resources/logo-fiuba.png';
import './App.css';


function App() {

  const onPress = async () => {
    const requestInit = {
      method: 'POST'
    }
    const response = await fetch('http://localhost:4000/login/logon', requestInit)
    const finalResponse = await response.text()
    console.log(finalResponse)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          fiUber
        </p>
        <form>
          <label>
            user:
            <input type="user" name="name" />
          </label> <br />
          <label>
            password:
            <input type="password" name="name" />
          </label> <br />
          <input onClick = {() => onPress()} type="submit" value="Submit" />
        </form>
        <button onClick = {() => onPress()} > hola soy un boton </button>
      </header>
    </div>
  );
}

export default App;