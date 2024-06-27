import "./Footer.style.css";

export function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="#cards">Projects</a>
          <a href="#skills-section">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/patrick-roessler-ab6a28304/"
              target="_blank"
            >
              <i className="fa-xl fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/PatrickRoe" target="_blank">
              <i className="fa-xl fa-brands fa-github"></i>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright ©{new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}
