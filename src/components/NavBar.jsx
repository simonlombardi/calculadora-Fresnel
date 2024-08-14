const NavBar = () => {
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Zona de Fresnel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#calculator">Calculadora</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.convertworld.com/es/" target="blank">Conversor de unidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Hecho por: Simon Lombardi</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
}

export default NavBar