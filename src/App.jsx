
import "./App.css";


const projects = [
  {
    number: "01",
    name: "Samanyav AI",
    category: "AI • Railway Operations",
    description:
      "An AI-powered railway block-planning prototype designed to maximize asset availability for train operations on Indian Railways.",
    tech: "Artificial Intelligence · Optimization · SIH 2026",
    color: "purple",
  },
  {
    number: "02",
    name: "UPI Fraud Shield",
    category: "Cybersecurity • FinTech",
    description:
      "A project focused on identifying suspicious UPI transactions and helping users recognize potential digital payment fraud.",
    tech: "Fraud Detection · UPI Security · AI",
    color: "blue",
  },
  
{
  number: "03",
  name: "Student Management System",
  category: "DBMS • SQL",
  description:
    "A database management project assigned by our professor, featuring a frontend interface and an SQL-based database to organize and manage student records.",
  tech: "SQL · DBMS · Frontend Development",
  color: "pink",
},

];


const skills = [
  "Python",
  "C",

  "HTML & CSS",
  "JavaScript",
  "React",
  "Pandas",
  "SQL",
  " GitHub",
  "Artificial Intelligence",
];

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">
          manya<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">
            Contact ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="hero-content">
          <div className="status">
            <span /> AI & DATA SCIENCE STUDENT
          </div>

          <p className="eyebrow">HELLO WORLD, I'M</p>
          <h1>
            Manya
            <br />
            <span className="gradient-text">Rao.</span>
          </h1>

          <p className="hero-description">
            I turn ideas into intelligent solutions through code,
            creativity, and artificial intelligence.
          </p>

          <div className="hero-buttons">
            <a className="button primary" href="#projects">
              Explore my work ↗
            </a>
            <a className="button secondary" href="#contact">
              Let's connect
            </a>
          </div>

          <div className="hero-bottom">
            <span>CURIOUS MIND. CREATIVE BUILDER.</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-ring ring-one" />
          <div className="decoration-ring ring-two" />
          <div className="floating-card">
            <span className="code-icon">{"</>"}</span>
            <div>
              <strong>Building the future</strong>
              <p>one idea at a time.</p>
            </div>
          </div>
          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">✦</span>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="section-label">01 / A LITTLE ABOUT ME</p>
        <h2>
          Tech enthusiast.
          <br />
          <span className="gradient-text">Problem solver.</span>
        </h2>
        <p className="section-description">
          I'm an Artificial Intelligence and Data Science engineering
          student passionate about building practical technology.
          I enjoy exploring AI, working with data, and developing
          projects that solve real-world problems.
        </p>
        <div className="about-note">
          <span>✳</span>
          Currently learning, building, and growing every day.
        </div>
      </section>

      <section className="section skills" id="skills">
        <p className="section-label">02 / MY TOOLKIT</p>
        <h2>Skills I'm <span className="gradient-text">building.</span></h2>
        <p className="section-description">
          Technologies I use and continue to explore.
        </p>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              <span>✳</span> {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <p className="section-label">03 / SELECTED PROJECTS</p>
        <h2>
          Ideas made <span className="gradient-text">real.</span>
        </h2>
        <p className="section-description">
          A few projects from my journey in technology.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.color}`}
              key={project.number}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-art">
                <span>{project.number}</span>
                <div className="art-orbit" />
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="tech-stack">{project.tech}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">04 / YOUR TURN</p>
        <h2>
          Have an idea?
          <br />
          <span className="gradient-text">Let's build it.</span>
        </h2>
        <p>
          Open to learning, collaborating, and building meaningful projects.
        </p>
        <a
          className="button primary"
          href="mailto:kmanyarao6@gmail.com"
        >
          Say hello ↗
        </a>
        <p className="email-note">
          Replace the placeholder email with your own address.
        </p>
      </section>

      <footer>
        <a className="logo" href="#home">
          manya<span>.</span>
        </a>
        <p>Designed with curiosity & built with React.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
