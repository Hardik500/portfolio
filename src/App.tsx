import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ExternalLink, Zap, Sparkles, Terminal, Code2 } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url?: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork: boolean;
}

const projects = [
  {
    name: 'everyday-expense-tracker',
    description: 'Full-stack expense tracking with analytics, goals, CSV import/export. React + Supabase + TypeScript.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    link: 'https://github.com/Hardik500/everyday-expense-tracker',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'quick-commerce-mcp',
    description: 'Universal MCP server aggregating Zepto, Swiggy, Blinkit, BigBasket. Compare prices in one place.',
    tech: ['TypeScript', 'MCP', 'Playwright', 'SQLite'],
    link: 'https://github.com/Hardik500/quick-commerce-mcp',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'pdf-to-excel-parser',
    description: 'PyPI package. Convert PDF invoices to Excel automatically. 100+ users.',
    tech: ['Python', 'PDF', 'OpenPyXL'],
    link: 'https://github.com/Hardik500/pdf-to-excel-parser',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'ai-virtual-tryon',
    description: 'AI-powered virtual try-on using diffusion models for e-commerce.',
    tech: ['Python', 'Computer Vision', 'Diffusion'],
    link: 'https://github.com/Hardik500/ai-virtual-tryon',
    gradient: 'from-purple-500 to-pink-600'
  }
];

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'AWS', level: 75 },
  { name: 'Docker', level: 70 },
];

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/Hardik500/repos?sort=updated&per_page=20')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter((repo: Repo) => !repo.fork && repo.description)
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);
        setRepos(sorted);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="app">
      {/* Cursor follower */}
      <motion.div 
        className="cursor-follower"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Background */}
      <div className="bg">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <motion.div style={{ y: y1 }} className="bg-orb orb-1"></motion.div>
        <motion.div style={{ y: y2 }} className="bg-orb orb-2"></motion.div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">HK</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} />
              <span>Open to work</span>
            </motion.div>
            
            <h1 className="hero-title">
              Hardik<br />
              <span className="outline">Khandelwal</span>
            </h1>
            
            <p className="hero-subtitle">
              Frontend Engineer • Building products that <span className="highlight">ship</span>
            </p>

            <p className="hero-desc">
              5+ years building scalable web apps with React, TypeScript & Node.js. 
              Currently building developer tools & automation.
            </p>

            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">
                See my work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch
              </a>
            </div>

            <div className="hero-links">
              <a href="https://github.com/hardik500" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/hardik500" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="https://twitter.com/JohnnnyGat" target="_blank" rel="noopener noreferrer">
                <Twitter size={22} />
              </a>
              <a href="mailto:hardik500@gmail.com">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-visual"
          >
            <div className="card hero-card">
              <div className="card-header">
                <div className="dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="card-body">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="var">me</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="prop">role</span>: <span className="string">"Frontend Engineer"</span>,
                </div>
                <div className="code-line indent">
                  <span className="prop">focus</span>: [<span className="string">"React"</span>, <span className="string">"TS"</span>],
                </div>
                <div className="code-line indent">
                  <span className="prop">location</span>: <span className="string">"India"</span>,
                </div>
                <div className="code-line indent">
                  <span className="prop">mode</span>: <span className="string">"shipping 🚀"</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>

            <div className="card stack-card">
              <div className="stack-header">
                <Zap size={16} />
                <span>Top Skills</span>
              </div>
              <div className="stack-list">
                {skills.slice(0, 4).map(skill => (
                  <div key={skill.name} className="skill-bar">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-track">
                      <motion.div 
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>scroll</span>
          <div className="scroll-line"></div>
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Selected Work</h2>
            <p className="section-sub">Things I've built</p>
          </motion.div>

          <div className="projects">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`project-glow ${project.gradient}`}></div>
                <div className="project-content">
                  <div className="project-top">
                    <ExternalLink size={18} />
                  </div>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Activity */}
          <motion.div
            className="github-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="github-header">
              <Github size={18} />
              <span>Recent on GitHub</span>
            </div>
            <div className="github-repos">
              {repos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-repo"
                >
                  <span className="repo-name">{repo.name}</span>
                  <span className="repo-lang">{repo.language}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Skills */}
      <section id="about" className="section alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">What I do</h2>
            <p className="section-sub">Building with modern tools</p>
          </motion.div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3><Code2 size={18} /> Frontend</h3>
              <div className="skill-tags">
                {['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind', 'Framer Motion'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3><Terminal size={18} /> Backend</h3>
              <div className="skill-tags">
                {['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST APIs'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3><Zap size={18} /> DevOps & Tools</h3>
              <div className="skill-tags">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            className="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Let's work together</h2>
            <p>Have a project in mind? Let's build something great.</p>
            <a href="mailto:hardik500@gmail.com" className="btn btn-primary large">
              <Mail size={20} />
              Say hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Hardik Khandelwal</p>
          <div className="footer-links">
            <a href="https://github.com/hardik500" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/hardik500" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com/JohnnnyGat" target="_blank" rel="noopener noreferrer">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
