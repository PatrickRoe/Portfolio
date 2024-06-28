import "./Skills.style.css";

export function Skills() {
  return (
    <>
      <section id="skills-section">
        <h1 className="skill-h1">My Skills</h1>
        <div className="skills-container">
          <div className="skill-name">
            <h2>HTML</h2>
            <div
              className="radial-progress"
              style={{ "--value": 95 }}
              role="progressbar"
            >
              95%
            </div>
          </div>
          <div className="skill-name">
            <h2>CSS</h2>
            <div
              className="radial-progress"
              style={{ "--value": 85 }}
              role="progressbar"
            >
              85%
            </div>
          </div>

          <div className="skill-name">
            <h2>JS</h2>
            <div
              className="radial-progress"
              style={{ "--value": 71 }}
              role="progressbar"
            >
              71%
            </div>
          </div>

          <div className="skill-name">
            <h2>Tailwind</h2>
            <div
              className="radial-progress"
              style={{ "--value": 87 }}
              role="progressbar"
            >
              87%
            </div>
          </div>

          <div className="skill-name">
            <h2>GitHub</h2>
            <div
              className="radial-progress"
              style={{ "--value": 78 }}
              role="progressbar"
            >
              78%
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
