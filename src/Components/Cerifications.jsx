import "../../src/index.css";
import Contribution from "../assets/Contribution.jpg";
import Web from "../assets/web.jpg";
import AI from "../assets/ai.jpg";
import Mern from "../assets/Fundamentals-of-MERN-Stack.avif";

function Certifications() {
  const certs = [
    {
      title: "GSSoC'25 ",
      img: Contribution,
      date: "July 2025 - Present",
      desc: "is a 3-month-long open-source program where contributors work on real-world projects, improve their coding skills, and collaborate with mentors and other developers. "
    },
    {
      title: "MERN STACK DEVELOPER",
      img: Mern,
      date: "Feb 2025 - Present",
      desc: "I learned full stack development and created many projects using MongoDB, Express, React, and Node.js."
    },
    {
      title: "AI and Data Science Training",
      img: AI,
      date: "Nov 2024 - Feb 2025",
      desc: "I studied Python, data visualization tools, and machine learning models."
    },
    {
      title: "Software Development",
      img: Web,
      date: "June 2024 - August 2024",
      desc: "I learned core Java and web technologies like HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section className="cert-section">
      <h1 className="section-title">CERTIFICATIONS & TRAINING</h1>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt={cert.title} className="cert-image" />

            {/* Overlay with all details */}
            <div className="cert-overlay">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              
            </div>
            <p className="cert-date"><strong>{cert.date}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

