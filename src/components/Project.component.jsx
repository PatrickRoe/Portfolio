import WetterHamburg from "../assets/picutres/WetterHamburg.png";
import Movie from "../assets/picutres/Movie.png";
import Questions from "../assets/picutres/Questions.png"
import Notice from "../assets/picutres/Notice.png"
import "./Project.style.css";

export function Project() {
  return (
    <>
      <section id="cards">
        <div className="hight color project1 card glass w-96">
          <figure>
            <img
              src={WetterHamburg}
              alt="Wetter in Hamburg"
              className="w-full"
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
              alt="Weather in Hamburg"
              className="w-full"
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
          <img
              src={Questions}
              alt="Questions"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 3</h2>
            <p>Questions</p>
            <div className="card-actions justify-end">
            <a
                href="https://github.com/PatrickRoe/Questions"
                className="btn btn-primary"
              >
                Click me
              </a>
            </div>
          </div>
        </div>
        
        <div className="hight color project4 card glass w-96">
          <figure>
          <img
              src={Notice}
              alt="Notice App"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project 4</h2>
            <p>Notice App</p>
            <div className="card-actions justify-end">
            <a
                href="https://github.com/PatrickRoe/NotizBlock"
                className="btn btn-primary"
              >
                Click me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
