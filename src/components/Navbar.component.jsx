import "./Navbar.style.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#cards">Projects</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Patrick Rößler</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <p>
              <a href="https://github.com/PatrickRoe" target="_blank">
                <i className="fa-xl fa-brands fa-github"></i>
              </a>
            </p>
          </button>

          <button className="btn btn-ghost btn-circle">
            <p>
              <a
                href="https://www.linkedin.com/in/patrick-roessler-ab6a28304/"
                target="_blank"
              >
                <i className="fa-xl fa-brands fa-linkedin"></i>
              </a>
            </p>
          </button>
        </div>
      </nav>
    </>
  );
}
