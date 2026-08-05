import { Link } from 'react-router-dom'

function Navber() {
  return (
    <div className="container border-bottom fixed-top mb-5">
      <nav className="navbar navbar-expand-lg p-2" style={{backgroundColor: "#fff"}}>
        <div className="container">

          <Link className="navbar-brand" to="/">
            <img src="media/logo.svg" alt="Brand Logo" style={{width: "25%"}}/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item mt-1 fs-4">
                <i className="fa-solid fa-bars nav-link"></i>
              </li>
        
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navber;
