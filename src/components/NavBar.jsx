function NavBar() {
  return (
    <header>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  I made this project for practice React and Firebase, you can
                  find the code in my github, this is my first project using
                  firebase in the back :) and Bootstrap helpme too. Thanks for
                  read this.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.instagram.com/santi_erodriguez/"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow on Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/santiago-echavarria-rodriguez-4b4a481a3/"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/saechavarria/"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Git Hub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <strong>React Blog</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
