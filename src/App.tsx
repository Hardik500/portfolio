import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Star, GitFork, Code2, Database, Cloud } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url?: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  homepage: string;
  updated_at: string;
  fork: boolean;
}

const skills = {
  frontend: ['React', 'TypeScript', 'Vue', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
};

// Sample featured repos (will be replaced by GitHub API)
const featuredRepos: Repo[] = [
  { id: 1, name: 'everyday-expense-tracker', html_url: 'https://github.com/Hardik500/everyday-expense-tracker', description: 'Full-stack expense tracking app with analytics', language: 'TypeScript', stargazers_count: 0, forks_count: 0, topics: [], homepage: '', updated_at: '', fork: false },
  { id: 2, name: 'quick-commerce-mcp', description: 'Universal Quick Commerce MCP for aggregated delivery', language: 'TypeScript', stargazers_count: 0, forks_count: 0, topics: [], homepage: '', updated_at: '', fork: false },
  { id: 3, name: 'pdf-to-excel-parser', description: 'Convert PDF invoices to Excel automatically', language: 'TypeScript', stargazers_count: 0, forks_count: 0, topics: [], homepage: '', updated_at: '', fork: false },
  { id: 4, name: 'ai-virtual-tryon', description: 'AI-powered virtual try-on solution', language: 'Python', stargazers_count: 0, forks_count: 0, topics: [], homepage: '', updated_at: '', fork: false },
  { id: 5, name: 'markdown-typewriter-react', description: 'React component with typewriter effect', language: 'TypeScript', stargazers_count: 0, forks_count: 0, topics: [], homepage: '', updated_at: '', fork: false },
];

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Hardik500/repos?sort=updated&per_page=20')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter((repo: Repo) => !repo.fork)
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 12);
        setRepos(sorted);
        setLoading(false);
      })
      .catch(() => {
        setRepos([]);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      Python: '#3572A5',
      Go: '#00ADD8',
      Rust: '#dea584',
      Java: '#b07219',
    };
    return colors[lang] || '#6e7681';
  };

  const displayRepos = repos.length > 0 ? repos : featuredRepos;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div variants={itemVariants} className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Hardik Khandelwal</h1>
            <h2 className="hero-title">Senior Software Engineer</h2>
            <p className="hero-tagline">
              Building scalable systems & delightful experiences
            </p>
            <div className="hero-links">
              <a href="https://github.com/hardik500" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/hardik500" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/JohnnnyGat" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="mailto:hardik500@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="hero-visual">
            <div className="code-block">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-var">engineer</span> ={' '}
                  <span className="code-brace">{'{'}</span>
                  {'\n'}
                  {'  '}name: <span className="code-string">"Hardik Khandelwal"</span>,
                  {'\n'}
                  {'  '}role: <span className="code-string">"Senior Software Engineer"</span>,
                  {'\n'}
                  {'  '}passion: [<span className="code-string">"Systems"</span>, <span className="code-string">"AI"</span>, <span className="code-string">"Open Source"</span>],
                  {'\n'}
                  {'  '}<span className="code-fn">build</span>: () {'=>'} <span className="code-string">"Impact"</span>
                  {'\n'}
                  <span className="code-brace">{'}'}</span>;
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="about-content">
            <div className="about-text">
              <p>
                I'm a Senior Software Engineer with 5+ years of experience building 
                scalable applications and distributed systems. I specialize in full-stack 
                development with a focus on React, Node.js, and cloud infrastructure.
              </p>
              <p>
                My journey includes working on everything from e-commerce platforms to 
                AI-powered solutions. I believe in writing clean, maintainable code and 
                continuously learning new technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source projects, 
                contributing to developer communities, or experimenting with new frameworks.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="projects-subtitle">
            Selected repositories from my GitHub
          </motion.p>
          
          {loading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading repositories...</p>
            </div>
          ) : (
            <motion.div variants={containerVariants} className="projects-grid">
              {displayRepos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="project-card"
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="project-header">
                    <h3 className="project-name">{repo.name}</h3>
                    <ExternalLink size={16} className="project-link-icon" />
                  </div>
                  <p className="project-description">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="project-meta">
                    <div className="project-language">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      {repo.language || 'Unknown'}
                    </div>
                    <div className="project-stats">
                      <span className="stat">
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                      <span className="stat">
                        <GitFork size={14} /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
          
          <motion.div variants={itemVariants} className="github-link">
            <a 
              href="https://github.com/Hardik500" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <Github size={20} />
              View All on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.h2 variants={itemVariants} className="section-title">
            Tech Stack
          </motion.h2>
          <motion.div variants={containerVariants} className="skills-grid">
            <motion.div variants={itemVariants} className="skill-category">
              <div className="skill-icon">
                <Code2 size={28} />
              </div>
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="skill-category">
              <div className="skill-icon">
                <Database size={28} />
              </div>
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="skill-category">
              <div className="skill-icon">
                <Cloud size={28} />
              </div>
              <h3>Tools & Cloud</h3>
              <div className="skill-tags">
                {skills.tools.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.div variants={itemVariants} className="contact-content">
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <div className="contact-links">
              <a href="mailto:hardik500@gmail.com" className="contact-button primary">
                <Mail size={20} />
                Say Hello
              </a>
              <a href="https://github.com/hardik500" target="_blank" rel="noopener noreferrer" className="contact-button secondary">
                <Github size={20} />
                Follow Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Hardik Khandelwal. Built with React + Vite.</p>
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
    </motion.div>
  );
}

export default App;
