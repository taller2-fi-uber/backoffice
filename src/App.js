import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
                path="/"
                element={<LogIn />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;