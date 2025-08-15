import photo from "../assets/photo. (2).jpg";
import resume from "../assets/SHIKHA MAURYA_RESUME_.pdf"
import "../../src/index.css";
import { Link } from 'react-scroll'; // for smooth scroll to contact section

function AboutMe() {
  return (
    <section id="about">
      <div className="container-about">
        <div className="img">
          <img src={photo} alt="Shikha Maurya" />
          <div className="btn-group">
<a href={resume} target="_blank" rel="noopener noreferrer">
  <button className="btn">View Resume</button>
</a>
    
        
          </div>
        </div>
        <div className="content">
          <h1>ABOUT ME</h1>
          <p>
            Hello! I’m <strong>Shikha Maurya</strong> — a passionate MERN Developer who loves building user-friendly and responsive web applications. 
            I have strong expertise in frontend technologies as well as solid experience in backend development. 
            Currently, I’m learning Data Structures and Algorithms (DSA) using Java to sharpen my problem-solving skills 
            and boost my creativity as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
