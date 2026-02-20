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
    description: 'A comprehensive, full-stack financial dashboard designed to empower users with actionable spending analytics. Engineered with a focus on seamless data visualization, dynamic goal tracking, and robust backend data management.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    link: 'https://github.com/Hardik500/everyday-expense-tracker',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'quick-commerce-mcp',
    description: 'An innovative aggregation tool bridging multiple platforms (Zepto, Swiggy, Blinkit, BigBasket). Built to optimize the consumer shopping experience by comparing real-time prices and inventory in a unified, accessible interface.',
    tech: ['TypeScript', 'MCP', 'Playwright', 'SQLite'],
    link: 'https://github.com/Hardik500/quick-commerce-mcp',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'pdf-to-excel-parser',
    description: 'An open-source Python utility automating the tedious data entry process for invoices and financial documents. Gained strong traction with 100+ active users by simplifying complex PDF text extraction into structured Excel data.',
    tech: ['Python', 'PDF', 'OpenPyXL'],
    link: 'https://github.com/Hardik500/pdf-to-excel-parser',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'ai-virtual-tryon',
    description: 'A cutting-edge e-commerce solution leveraging advanced Diffusion models to create realistic virtual clothing try-ons. Demonstrates strong capability to integrate complex AI/Computer Vision models seamlessly into consumer-facing applications.',
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
      .catch(() => { });
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
              Senior Frontend Engineer • <span className="highlight">Architecting</span> solutions that drive impact
            </p>

            <p className="hero-desc">
              I'm a Senior Frontend Engineer transforming complex challenges into intuitive, high-performance web applications. I bridge the gap between robust technical architecture and seamless user design to build sustainable digital products.
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
                  <span className="prop">role</span>: <span className="string">"Senior Frontend Engineer"</span>,
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
          style={{ opacity } as any}
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
            <h2 className="section-title">Engineering Arsenal & Expertise</h2>
            <p className="section-sub">Bridging abstract systems and engaging interfaces</p>
          </motion.div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3><Code2 size={18} /> Frontend Architecture</h3>
              <p className="skill-desc" style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>Proficient in building scalable design systems and responsive interfaces that prioritize accessibility & performance.</p>
              <div className="skill-tags">
                {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3><Terminal size={18} /> Full-Stack Integration</h3>
              <p className="skill-desc" style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>Experienced in connecting robust frontends to reliable backends, ensuring smooth data flow and state management.</p>
              <div className="skill-tags">
                {['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST APIs'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3><Zap size={18} /> Infrastructure & DevOps</h3>
              <p className="skill-desc" style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>Dedicated to developer operations, continuous integration, and automated testing to ensure product quality.</p>
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
            <h2>Let's Shape the Future of the Web Together</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6, opacity: 0.9 }}>
              I am driven by a passion for continuous learning and a vision to build digital experiences that empower and inspire.
              Whether it's architecting a complex frontend system from scratch, optimizing performance for a global audience,
              or mentoring a team to deliver a critical product, I bring dedication and technical excellence to every challenge.
              If you're looking for an engineer who cares deeply about both the code and the people who use it,
              let's connect and build something extraordinary.
            </p>
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
