import "../../src/index.css";
import calculator from "../assets/calculator.jpg";
import simon from "../assets/simon.jpeg";
import FoodieCrush from "../assets/Screenshot 2025-08-06 230626.png";
import travel from "../assets/Screenshot 2025-08-06 230904.png";
import portfolio from "../assets/portfolio.jpg";
import Zerodha from "../assets/OIP.webp";

function Projects() {
  const projects = [
    {
      img: calculator,
      link: "https://itsshikhamaurya21.github.io/My_Calculator/",
      title: "Calculator",
      description: "A basic calculator using HTML, CSS, and JavaScript.",
    },
    {
      img: simon,
      link: "https://itsshikhamaurya21.github.io/Simon-game/",
      title: "Simon Game",
      description: "A memory game built with JavaScript logic and DOM.",
    },
    {
      img: FoodieCrush,
      link: "https://itsshikhamaurya21.github.io/FoodieCrush/",
      title: "Foodie Crush",
      description: "A food recipe app with interactive UI and search filter.",
    },
    {
      img: travel,
      link: "https://itsshikhamaurya21.github.io/Adventure_trips/",
      title: "Adventure Trips",
      description: "A travel website UI with destination cards and images.",
    },
    {
      img: portfolio,
      link: "#", 
      title: "My Portfolio",
      description: "My personal portfolio built with React and modern UI.",
    },
    {
      img: Zerodha,
      link: "https://github.com/itsShikhamaurya21/Zerodha-Clone-frontend-", 
      title: "Zerotha Clone frontend",
      description: "A clone of Zerodha's frontend, showcasing stock trading features. and responsive design.",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
