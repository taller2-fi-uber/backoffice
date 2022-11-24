import {BrowserRouter, Navigate, Redirect, Route, Routes, Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import './App.css'
import {isSessionUp} from "./utils/session";
import Home from "./pages/Home";
import LogOut from "./pages/LogOut";
import Users from './pages/Users';

const PrivateRoute = () => {
    const auth = isSessionUp(); // determine if authorized, from context or however you're doing it
    console.log("Is session up:" + auth)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet/> : <Navigate to="/login"/>;
}

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className='pages'>
                    <Routes>
                        <Route
                            path="/login"
                            element={<LogIn/>}
                        />
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/signup' element={<SignUp/>}/>
                        </Route>
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/users' element={<Users/>}/>
                        </Route>
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/home' element={<Home/>}/>
                        </Route>
                        <Route exact path='/' element={<PrivateRoute/>}>
                            <Route exact path='/logout' element={<LogOut/>}/>
                        </Route>
                        <Route
                            path="/"
                            element={<Navigate to="/login"/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;