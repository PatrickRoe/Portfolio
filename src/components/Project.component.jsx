import "./Project.style.css";
import WetterHamburg from "../assets/picutres/WetterHamburg.png";
import Movie from "../assets/picutres/Movie.png";

export function Project() {
  return (
    <>
      <section id="cards">
        <div className="hight color project1 card glass w-96">
          <figure>
            <img
              src={WetterHamburg}
              alt="Wetter in Hamburg"
              className="w-full h-100 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projekt 1</h2>
            <p> Weather App</p>
            <div className="card-actions justify-end">
              <a
                href="https://weather-app-eta-five-31.vercel.app/"
                className="btn btn-primary"
              >
                Click me
              </a>
            </div>
          </div>
        </div>
        
        
        <div className="hight color project2 card glass w-96">
          <figure>
          <img
              src={Movie}
              alt="Wetter in Hamburg"
              className="w-full h-100 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Projekt 2</h2>
            <p>Movie App</p>
            <div className="card-actions justify-end">
            <a
                href="https://favorite-movies-list.vercel.app/"
                className="btn btn-primary"
              >
                Click me
              </a>
            </div>
          </div>
        </div>

        <div className="hight color project3 card glass w-96">
          <figure>
          
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 3</h2>
            <p>Coming soon..</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Click me</button>
            </div>
          </div>
        </div>

        <div className="hight color project4 card glass w-96">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">Project 4</h2>
            <p>Coming soon..</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Click me</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
