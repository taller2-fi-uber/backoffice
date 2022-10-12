import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <header>
          <div className="container">
              <Link to='/login'>
                <h1>login</h1>
              </Link>
              <Link to='/signup'>
                  <h1>signup</h1>
              </Link>
          </div>
      </header>
  )
}

export default Navbar