import "./Hero.style.css"

export function Hero() {
  return (
    <>
    <section className="hero-section">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="typewriter text-5xl font-bold">I'm a Web Devolper</h1>
            <p className="py-6">
            Dive into creative web projects, innovative solutions, and cutting-edge technologies. Discover my passion for top-notch web development!
            </p>
            <a href="#contact" className="btn btn-primary text-white">Contact</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
