import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
                path="/login"
                element={<LogIn />}
            />
            <Route
                path="/signup"
                element={<SignUp />}
            />
            <Route
                path="/"
                element={ <Navigate to="/login" /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;