import { Link } from 'react-router-dom'
import {isSessionUp} from "../utils/session";

const Navbar = () => {
  return (
      <header>
          {!isSessionUp() && (
              <div className="container">
                <Link to='/login'>
                      <h1>login</h1>
                  </Link>

          </div>)}
          {isSessionUp() && (
              <div className="container">
                  <Link to='/signup'>
                      <h1>new admin</h1>
                  </Link>
                  <Link to='/users'>
                      <h1>users</h1>
                  </Link>
                  <Link to='/rules'>
                    <h1>rules</h1>
                  </Link>
                  <Link to='/home'>
                      <h1>home</h1>
                  </Link>
                  <Link to='/logout'>
                      <h1>log out</h1>
                  </Link>
              </div>)}
      </header>
  )
}

export default Navbar
