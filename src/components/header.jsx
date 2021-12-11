const Header = () => {
    return (

        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> 
          <div class="container-fluid">
                  
                  <a href="#" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <strong>Album de Fotos</strong>
                  </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                  
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    
                    <li className="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link"  href="#contato">Contato</a>
                    </li>

                  </ul>
                  
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Pesquisar por Imagem" aria-label="Search"/>
                    <button type="submit" className="btn btn-outline-light">Buscar</button>
                </form>
              </div>
          </div>
        </nav>
      </header>
    )
}

export default Header