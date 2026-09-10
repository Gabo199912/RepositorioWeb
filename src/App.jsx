import { profile, skills } from './data/profile.js'
import { projects, statusLabels } from './data/projects.js'

function Sidebar() {
  const navItems = [
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#stack', label: 'Stack' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header className="sidebar">
      <div className="sidebar-top">
        <img
          className="sidebar-photo"
          src={profile.photoUrl}
          alt={`Foto de ${profile.name}`}
        />
        <p className="sidebar-name">{profile.name}</p>
        <p className="sidebar-role">{profile.role}</p>
        <p className="sidebar-location">{profile.location}</p>
      </div>

      <nav className="sidebar-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
  className="cv-download"
  href={profile.cvUrl}
  target="_blank"
  rel="noreferrer"
>
  Ver CV
</a>

      <div className="sidebar-status">
        <span
          className={`status-dot ${profile.available ? 'is-available' : 'is-unavailable'}`}
          aria-hidden="true"
        />
        <span>
          {profile.available ? 'Disponible para nuevos proyectos' : 'No disponible por ahora'}
        </span>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">{profile.statement}</h1>
      <p className="hero-bio">{profile.bio}</p>
    </section>
  )
}

function ProjectRow({ project, index }) {
  return (
    <li className="project-row">
      <div className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <span className={`project-status status-${project.status}`}>
            {statusLabels[project.status]}
          </span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-stack" aria-label="Tecnologías usadas">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Repositorio
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
      <div className="project-year">{project.year}</div>
    </li>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Proyectos</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </ul>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <h2 id="stack-heading">Stack</h2>
      <div className="stack-grid">
        {skills.map((group) => (
          <div key={group.category} className="stack-group">
            <p className="stack-category">{group.category}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="section section-contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contacto</h2>
      <p>¿Tienes un proyecto backend en mente? Escríbeme.</p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Hero />
        <Projects />
        <Stack />
        <Contact />
        <footer className="footer">
          <p>Construido con React + Vite.</p>
        </footer>
      </main>
    </div>
  )
}
