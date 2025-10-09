import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-layout">
        <div className="content">
          <p id="intro-text">
            This will be Paul's awe-inspiring and stupefyingly advanced website.
          </p>

          <div className="notice" id="notice-text">
            This site is currently under construction. Please check back later.
          </div>

          <p id="game-text">
            Meanwhile, you can try a Finnish word-guessing game here:
          </p>
          <ul className="links">
            <li>
              <a id="sanuli-btn" href="https://sanuli.paulcarlson.fi">
                <FontAwesomeIcon icon={faGamepad} /> Play Sanuli
              </a>
            </li>
          </ul>

          <h2 id="connect-title">Connect with me</h2>
          <ul className="links">
            <li>
              <a
                href="https://www.linkedin.com/in/paul-carlson-pc86/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Phoolis" target="_blank">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
          </ul>
        </div>

        <aside className="sidebar">
          <h2 id="about-header">About Me</h2>
          <img src="itsme_paul.jpg" alt="Paul Carlson" />
          <p id="about-text">
            I’m Paul, a developer interested in backend, web development, and
            anything DevOps. This site is a work in progress, but over time I’ll
            add projects, experiments, and write-ups here.
          </p>
        </aside>
      </main>
      <Footer />
    </>
  );
}
