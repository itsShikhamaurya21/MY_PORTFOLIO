import "../../src/index.css";

function Contactme() {
  return (
    <section id="contact">
      <h1 className="section-title">CONTACT ME</h1>
      <div className="contact-container">
        <p>If you'd like to get in touch, feel free to reach out via the details below:</p>

        <div className="contact-info">
          <p>
            <strong>
              <i className="fa-solid fa-paper-plane" style={{ marginRight: "8px" }}></i>
            </strong>
            <a href="mailto:shikhamaurya987373@gmail.com">shikhamaurya987373@gmail.com</a>
          </p>
          <p>
            <strong>
              <i className="fa-solid fa-phone" style={{ marginRight: "8px" }}></i>
            </strong>
            <a href="tel:+918368777239">+91 8368777239</a>
          </p>
          <p>
            <strong>
              <i className="fa-solid fa-location-dot" style={{ marginRight: "8px" }}></i>
            </strong>
            Greater Noida, India
          </p>

          {/* Social Media Links */}
          <div className="socials">
            <a href="https://www.linkedin.com/in/shikha-maurya-5189262a9/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/itsShikhamaurya21" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://instagram.com/shikha_kushwaha_21" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Contactme;
