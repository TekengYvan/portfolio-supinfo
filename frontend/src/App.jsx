import LifelineVisual from "./LifelineVisual";
import { useEffect, useState } from "react";
import { useTheme } from "./useTheme";
import Typewriter from "./Typewriter";
import ProjectDetail from "./ProjectDetail";
import ContactForm from "./ContactForm";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Database,
  Code2,
  GraduationCap,
  Award,
  MapPin,
  Plus,
  Minus,
  Monitor,
  Layers,
} from "lucide-react";
import { profile, projects, certificates } from "./portfolioData";
import "./App.css";
const { github, linkedin, email } = profile;
function External({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function SectionTitle({ number, label, title, word, children }) {
  return (
    <div className="section-heading">
      <span className="watermark" aria-hidden="true">
        {word}
      </span>
      <div>
        <p className="eyebrow">
          [ {number} ] — {label}
        </p>
        <h2>
          {title}
          <span>.</span>
        </h2>
      </div>
      {children}
    </div>
  );
}
function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "fr";
    } catch {
      return "fr";
    }
  });
  const { mode, setMode, dark } = useTheme();
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const fromUrl = () =>
    projects.find(
      (p) =>
        p.slug === new URLSearchParams(window.location.search).get("project"),
    ) || null;
  const [selected, setSelected] = useState(fromUrl);
  function openProject(project) {
    window.history.pushState(
      { project: true },
      "",
      "?project=" + encodeURIComponent(project.slug),
    );
    setSelected(project);
  }
  function backToProjects() {
    window.history.pushState({}, "", window.location.pathname + "#projects");
    setSelected(null);
    setTimeout(() => document.getElementById("projects")?.scrollIntoView(), 0);
  }
  function homeNavigation(event) {
    const link = event.target.closest('a[href^="#"]');
    if (!selected || !link) return;
    event.preventDefault();
    const id = link.getAttribute("href").slice(1);
    window.history.pushState({}, "", window.location.pathname + "#" + id);
    setSelected(null);
    setMenu(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0);
  }
  useEffect(() => {
    const sync = () =>
      setSelected(
        projects.find(
          (p) =>
            p.slug ===
            new URLSearchParams(window.location.search).get("project"),
        ) || null,
      );
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  useEffect(() => {
    document.title = selected
      ? selected.name + " — Yvan Tekeng"
      : "Yvan Tekeng — Génie logiciel & innovation";
  }, [selected]);
  const i = language === "fr" ? 0 : 1;
  const t = (fr, en) => (i === 0 ? fr : en);
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);
  useEffect(() => {
    if (!menu) return;
    const close = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  const navigation = [
    ["projects", t("Réalisations", "Projects")],
    ["about", t("À propos", "About")],
    ["education", t("Parcours", "Education")],
    ["certifications", "Certifications"],
  ];
  const expertise = [
    [
      Code2,
      t("Développement d’applications", "Application development"),
      t(
        "Du web au mobile, des outils conçus autour de vos besoins.",
        "From web to mobile, tools designed around your needs.",
      ),
      "React · React Native · Django",
    ],
    [
      Layers,
      t("Analyse des systèmes", "Systems analysis"),
      t(
        "Comprendre les processus, modéliser les besoins et structurer les solutions.",
        "Understand processes, model requirements and structure solutions.",
      ),
      "UML · Architecture · SQL",
    ],
    [
      ShieldCheck,
      t("Cybersécurité", "Cybersecurity"),
      t(
        "Comprendre les menaces. Concevoir des systèmes plus sûrs.",
        "Understand threats. Build safer systems.",
      ),
      "Cisco · TryHackMe · Python",
    ],
    [
      Cpu,
      "Internet of Things",
      t(
        "Connecter le monde physique à des solutions utiles.",
        "Connect the physical world to useful solutions.",
      ),
      "IoT · GPS · Mobile",
    ],
    [
      Database,
      "Data Science",
      t(
        "Explorer les données et en extraire du sens.",
        "Explore data and uncover meaningful insights.",
      ),
      "Python · Classification · SQL",
    ],
    [
      BrainCircuit,
      t("Intelligence artificielle", "Artificial intelligence"),
      t(
        "Intégrer l’IA à des expériences concrètes.",
        "Bring AI into real-world experiences.",
      ),
      "TensorFlow · OpenCV · NextLuk",
    ],
  ];
  return (
    <div onClick={homeNavigation}>
      <a className="skip-link" href="#main">
        {t("Aller au contenu", "Skip to content")}
      </a>
      <header className="header">
        <a className="brand" href="#home" aria-label="Yvan Tekeng">
          <span className="brand-mark">✳</span> YVAN
          <span className="brand-dot">.</span>TEKENG
        </a>
        <nav
          className={menu ? "navigation is-open" : "navigation"}
          id="navigation"
          aria-label={t("Navigation principale", "Main navigation")}
        >
          {navigation.map(([id, label]) => (
            <a href={"#" + id} key={id} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button language"
            onClick={() => setLanguage(i === 0 ? "en" : "fr")}
            aria-label={t("Switch to English", "Passer en français")}
          >
            {i === 0 ? "EN" : "FR"}
          </button>
          <button
            className="icon-button theme-toggle"
            type="button"
            data-mode={mode}
            onClick={() => setMode(mode === "light" ? "dark" : mode === "dark" ? "system" : "light")}
            aria-label={t(
              `Thème ${mode === "light" ? "clair" : mode === "dark" ? "sombre" : "système"} — passer au mode ${mode === "light" ? "sombre" : mode === "dark" ? "système" : "clair"}`,
              `${mode} theme — switch to ${mode === "light" ? "dark" : mode === "dark" ? "system" : "light"} mode`
            )}
            title={t(
              `Mode ${mode === "light" ? "clair" : mode === "dark" ? "sombre" : "système"}`,
              `${mode} mode`
            )}
          >
            {mode === "system" ? <Monitor size={19} aria-hidden="true" /> : mode === "dark" ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
          </button>
          <a className="button button-small header-contact" href="#contact">
            {t("Me contacter", "Contact me")}
            <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button mobile-toggle"
            aria-expanded={menu}
            aria-controls="navigation"
            aria-label={t("Ouvrir le menu", "Toggle menu")}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {selected ? (
        <ProjectDetail
          key={selected.slug}
          project={selected}
          projects={projects}
          language={language}
          onSelect={openProject}
          onBack={backToProjects}
        />
      ) : (
        <main id="main">
          <section className="hero grid-paper" id="home">
            <div className="hero-copy">
              <p className="eyebrow">[ 00 ] — INTRODUCTION</p>
              <div className="role">
                <span>
                  {t(
                    "Ingénieur des travaux en génie logiciel",
                    "Software engineering graduate",
                  )}
                </span>
                <span className="rule" />
              </div>
              <h1 className="hero-full-name" aria-label="TEKENG DJANG YVAN DUPLEX PACOM">
                <Typewriter word="TEKENG DJANG YVAN DUPLEX PACOM" />
              </h1>
              <p className="hero-description">
                {t(
                  "Je conçois des solutions numériques utiles, intelligentes et sécurisées. Ma passion : la ",
                  "I build useful, intelligent and secure digital solutions. My passion: ",
                )}
                <strong>
                  {t(
                    "cybersécurité, l’IoT, la Data Science et l’intelligence artificielle.",
                    "cybersecurity, IoT, Data Science and artificial intelligence.",
                  )}
                </strong>
              </p>
              <div className="hero-buttons">
                <a className="button primary" href="#contact">
                  {t(
                    "Parlons de votre projet",
                    "Let’s talk about your project",
                  )}
                  <ArrowUpRight size={17} />
                </a>
                <a className="button" href="#projects">
                  {t("Voir mes réalisations", "Explore my work")}
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="socials">
                <External href={github}>
                  <Github size={15} /> GitHub
                </External>
                <External href={linkedin}>
                  <Linkedin size={15} /> LinkedIn
                </External>
                <a href={"mailto:" + email}>
                  <Mail size={15} /> Email
                </a>
              </div>
              <a className="scroll-link" href="#projects">
                <ArrowDown size={14} />
                {t("Découvrir", "Scroll to explore")}
              </a>
            </div>
            <div
              className={
                dark
                  ? "hero-portrait portrait-dark"
                  : "hero-portrait portrait-light"
              }
            >
              <img
                src="/images/tekeng-yvan.jpeg"
                alt="Yvan Duplex Pacom Tekeng Djang"
                fetchPriority="high"
                width="952"
                height="1276"
              />
              <div className="portrait-top">
                <span className="status-dot" />
                {t(
                  "Ingénierie · Innovation · Impact",
                  "Engineering · Innovation · Impact",
                )}
              </div>
              <div className="portrait-annotations">
                <p>{t("DE L’IDÉE À LA SOLUTION", "FROM IDEA TO SOLUTION")}</p>
                <span>
                  <b>01</b>
                  {t("Applications web & mobile", "Web & mobile apps")}
                </span>
                <span>
                  <b>02</b>
                  {t("Analyse des systèmes", "Systems analysis")}
                </span>
                <span>
                  <b>03</b>
                  {t("Sécurité & intelligence", "Security & intelligence")}
                </span>
              </div>
              <div className="portrait-caption">
                <span>
                  TEKENG DJANG
                  <br />
                  YVAN DUPLEX PACOM
                </span>
                <span>
                  <MapPin size={13} /> Yaoundé, Cameroun
                </span>
              </div>
              <span className="portrait-cross" aria-hidden="true">
                +
              </span>
            </div>
          </section>
          <div className="expertise-strip">
            {expertise.map(([Icon, name], n) => (
              <a href="#expertise" key={name}>
                <span className="mono">0{n + 1}</span>
                <Icon size={19} />
                {name}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <section className="section projects-section" id="projects">
            <SectionTitle
              number="01"
              label={t("UNE SÉLECTION DE PROJETS", "SELECTED WORK")}
              title={t("Réalisations", "Selected work")}
              word="WORK"
            >
              <External className="text-link" href={github}>
                {t("Explorer mon GitHub", "Explore my GitHub")}
                <ArrowUpRight size={17} />
              </External>
            </SectionTitle>
            <div
              className="filters"
              aria-label={t("Filtrer les projets", "Filter projects")}
            >
              {[
                ["All", t("Tous", "All")],
                [
                  "AI",
                  t("Intelligence artificielle", "Artificial intelligence"),
                ],
                ["IoT", "IoT"],
                ["Web", "Web"],
                ["Software", t("Logiciel", "Software")],
                ["Security", t("Cybersécurité", "Cybersecurity")],
              ].map(([value, label]) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                  className={filter === value ? "active" : ""}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {projects
                .filter((p) => filter === "All" || p.category === filter)
                .slice(0, filter === "All" && !showAll ? 3 : undefined)
                .map((p) => (
                  <article
                    className={
                      "project-card " + (p.name === "NextLuk" ? "featured" : "")
                    }
                    key={p.name}
                  >
                    <button
                      className="project-image"
                      onClick={() => openProject(p)}
                      aria-label={t("Découvrir ", "Explore ") + p.name}
                    >
                      {p.slug === "lifeline-saver" ? (
                        <LifelineVisual language={language} />
                      ) : p.image ? (
                        <img
                          src={p.image}
                          alt={p.caption[i] + " — " + p.name}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={
                            "typographic-project " +
                            (p.visual === "IAI" ? "iai" : "contour")
                          }
                        >
                          <Code2 size={32} />
                          <span>{p.visual}</span>
                        </div>
                      )}
                      <span className="project-number">
                        {String(projects.indexOf(p) + 1).padStart(2, "0")}
                      </span>
                      <span className="project-image-action">
                        <ArrowUpRight size={22} />
                      </span>
                      {p.name === "NextLuk" && (
                        <span className="featured-label">
                          {t("Projet à la une", "Featured project")}
                        </span>
                      )}
                    </button>
                    <div className="project-content">
                      <p className="eyebrow">{p.type[i]}</p>
                      <h3>
                        <button onClick={() => openProject(p)}>
                          {p.name}
                          <ArrowUpRight size={22} />
                        </button>
                      </h3>
                      <p>{p.description[i]}</p>
                      <div className="tags">
                        {p.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <button
                        className="text-link project-more"
                        onClick={() => openProject(p)}
                      >
                        {t("En savoir plus", "Learn more")}
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
            </div>
            <div className="projects-expand">
              {filter === "All" && (
                <button
                  className="button"
                  onClick={() => setShowAll(!showAll)}
                  aria-expanded={showAll}
                >
                  {showAll
                    ? t("Réduire la sélection", "Show featured projects")
                    : t("Voir tous les projets", "View all projects")}
                  <span>({projects.length})</span>
                  {showAll ? <Minus size={16} /> : <Plus size={16} />}
                </button>
              )}
            </div>
            <p className="project-note">
              {t(
                "Projets personnels et contributions collaboratives. Les visuels sont identifiés dans chaque fiche.",
                "Personal projects and collaborative contributions. Visual sources are identified in each project detail.",
              )}
            </p>
          </section>
          <section className="section about-section grid-paper" id="about">
            <SectionTitle
              number="02"
              label={t("LE SENS DU CODE", "BEHIND THE CODE")}
              title={t("Curieux par nature", "Curious by nature")}
              word="BUILD"
            />
            <div className="about-grid">
              <div>
                <h3 className="statement">
                  {t("Ingénieur par formation.", "An engineer by training.")}
                  <br />
                  <span>
                    {t(
                      "Créateur de solutions par passion.",
                      "A problem solver by passion.",
                    )}
                  </span>
                </h3>
                <p>
                  {t(
                    "Je suis Yvan Duplex Pacom Tekeng Djang, ingénieur des travaux en génie logiciel formé à l’Institut Africain d’Informatique (IAI-Cameroun). J’allie conception logicielle, esprit d’analyse et goût de l’expérimentation.",
                    "I’m Yvan Duplex Pacom Tekeng Djang, a software engineering graduate of the African Institute of Computer Science (IAI-Cameroon). I combine software design, analytical thinking and a love of experimentation.",
                  )}
                </p>
                <p>
                  {t(
                    "De la détection d’accidents à la mode augmentée par l’IA, je m’intéresse aux technologies qui répondent à des besoins réels. J’aime apprendre, collaborer et transformer une idée en une application concrète.",
                    "From accident detection to AI-powered fashion, I’m interested in technology that addresses real needs. I enjoy learning, collaborating and turning an idea into a working application.",
                  )}
                </p>
                <div className="cv-links">
                  <a
                    className="button primary"
                    href="/cv/Tekeng-Yvan-FR.pdf"
                    download
                  >
                    <Download size={17} />
                    CV français
                  </a>
                  <a className="button" href="/cv/Tekeng-Yvan-EN.pdf" download>
                    <Download size={17} />
                    English CV
                  </a>
                </div>
              </div>
              <div className="profile-facts">
                <div>
                  <span>01 / {t("FORMATION", "EDUCATION")}</span>
                  <strong>IAI · Génie logiciel</strong>
                  <p>
                    DTS ·{" "}
                    {t(
                      "Licence professionnelle",
                      "Professional bachelor’s degree",
                    )}{" "}
                    ·{" "}
                    {t(
                      "Diplôme d’ingénieur des travaux",
                      "Engineering diploma",
                    )}
                  </p>
                </div>
                <div>
                  <span>02 / {t("LANGUES", "LANGUAGES")}</span>
                  <strong>
                    {t(
                      "Français · Anglais · Chinois",
                      "French · English · Chinese",
                    )}
                  </strong>
                  <p>
                    {t(
                      "Courant · Langue maternelle · Intermédiaire",
                      "Proficient · Native · Intermediate",
                    )}
                  </p>
                </div>
                <div>
                  <span>03 / {t("AU-DELÀ DU CODE", "BEYOND CODE")}</span>
                  <strong>
                    {t(
                      "Recherche, lecture & football",
                      "Research, reading & football",
                    )}
                  </strong>
                  <p>
                    {t(
                      "La curiosité comme moteur. Le collectif comme force.",
                      "Driven by curiosity. Strengthened by teamwork.",
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div id="expertise" className="expertise-grid">
              {expertise.map(([Icon, name, description, stack]) => (
                <article key={name}>
                  <Icon size={27} />
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <span className="mono">{stack}</span>
                </article>
              ))}
            </div>
            <div className="stack">
              <span className="eyebrow">
                {t("MA BOÎTE À OUTILS", "MY TOOLKIT")}
              </span>
              <p>
                Python / JavaScript / React / React Native / Django / Node.js /
                Laravel / Flutter / PostgreSQL / MongoDB / Git / UML
              </p>
            </div>
          </section>

          <section className="section" id="education">
            <SectionTitle
              number="03"
              label={t("APPRENDRE & CONSTRUIRE", "LEARN & BUILD")}
              title={t("Mon parcours", "My journey")}
              word="LEARN"
            />
            <div className="journey-layout">
              <div className="journey-label">
                <GraduationCap size={30} />
                <h3>{t("Études & diplômes", "Education & degrees")}</h3>
                <p>
                  {t(
                    "Une base solide en informatique, enrichie par la pratique.",
                    "A strong computer science foundation, developed through practice.",
                  )}
                </p>
              </div>
              <div className="timeline">
                <article>
                  <span className="timeline-date">
                    2023 — {t("SEPTEMBRE", "SEPTEMBER")} 2026
                  </span>
                  <h3>
                    {t(
                      "Institut Africain d’Informatique",
                      "African Institute of Computer Science",
                    )}
                  </h3>
                  <p>
                    IAI-Cameroun ·{" "}
                    {t(
                      "Génie logiciel · Diplômes obtenus",
                      "Software engineering · Degrees awarded",
                    )}
                  </p>
                  <ul className="degree-list">
                    <li>
                      <GraduationCap size={17} />
                      {t(
                        "Diplôme d’ingénieur des travaux en génie logiciel",
                        "Engineering diploma in software engineering",
                      )}
                    </li>
                    <li>
                      <GraduationCap size={17} />
                      {t(
                        "Licence professionnelle en génie logiciel",
                        "Professional bachelor’s degree in software engineering",
                      )}
                    </li>
                    <li>
                      <GraduationCap size={17} />
                      {t(
                        "Diplôme de technicien supérieur (DTS) · 2025 · Avec distinction",
                        "Higher Technician Diploma (DTS) · 2025 · With distinction",
                      )}
                    </li>
                  </ul>
                </article>
                <article>
                  <span className="timeline-date">2016 — 2023</span>
                  <h3>Lycée Bilingue de Bobongo Petit Paris</h3>
                  <p>
                    GCE Advanced Level & Ordinary Level ·{" "}
                    {t(
                      "Option sciences · Avec distinction",
                      "Science · With distinction",
                    )}
                  </p>
                </article>
                <article>
                  <span className="timeline-date">2010 — 2015</span>
                  <h3>Groupe Scolaire Bilingue Les Petits Génies</h3>
                  <p>First School Leaving Certificate</p>
                </article>
              </div>
            </div>
            <div className="journey-layout experience">
              <div className="journey-label">
                <Code2 size={30} />
                <h3>{t("Expérience de terrain", "Practical experience")}</h3>
              </div>
              <div className="timeline">
                <article>
                  <span className="timeline-date">
                    {t("JUIN — SEPTEMBRE 2025", "JUNE — SEPTEMBER 2025")}
                  </span>
                  <h3>Welldone & Co Enterprise</h3>
                  <p>
                    {t(
                      "Stage en informatique · Yaoundé, Cameroun",
                      "IT internship · Yaoundé, Cameroon",
                    )}
                  </p>
                  <p>
                    {t(
                      "Installation et configuration de systèmes informatiques, développement de solutions numériques, participation à la sécurité réseau et assistance technique aux utilisateurs.",
                      "Computer system installation and configuration, digital solution development, network security support and technical assistance for users.",
                    )}
                  </p>
                </article>
                <article>
                  <span className="timeline-date">
                    {t("JANVIER — FÉVRIER 2026", "JANUARY — FEBRUARY 2026")}
                  </span>
                  <h3>
                    {t(
                      "Projet académique · Sécurité de l’information",
                      "Academic project · Information security",
                    )}
                  </h3>
                  <p>
                    {t(
                      "Confidentialité, intégrité, disponibilité : simulations d’attaques, analyse des risques et présentation de solutions techniques.",
                      "Confidentiality, integrity and availability: attack simulations, risk analysis and technical solution presentations.",
                    )}
                  </p>
                </article>
              </div>
            </div>
            <div className="achievement">
              <Award size={38} />
              <div>
                <p className="eyebrow">
                  {t("COMPÉTITION INTERNATIONALE", "INTERNATIONAL COMPETITION")}
                </p>
                <h3>GCD4F · {t("Finales africaines", "African finals")}</h3>
                <p>
                  {t(
                    "Participation aux phases finales africaines de la compétition GCD4F. Une expérience de créativité, de conception et de collaboration.",
                    "Participation in the African final stages of GCD4F. An experience in creativity, design and collaboration.",
                  )}
                </p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </section>
          <section
            className="section certification-section"
            id="certifications"
          >
            <SectionTitle
              number="04"
              label={t("APPRENTISSAGE CONTINU", "CONTINUOUS LEARNING")}
              title="Certifications"
              word="GROW"
            />
            <div className="certifications">
              {certificates.map(([name, issuer], n) => (
                <details key={name}>
                  <summary>
                    <span className="cert-number">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{name}</h3>
                      <p>{issuer}</p>
                    </div>
                    <Plus size={18} className="plus" />
                    <Minus size={18} className="minus" />
                  </summary>
                  <p className="certificate-detail">
                    {t(
                      "Certification obtenue. Contactez-moi pour en savoir plus sur cette formation et les compétences acquises.",
                      "Certification obtained. Contact me to learn more about this training and the skills developed.",
                    )}
                  </p>
                </details>
              ))}
            </div>
          </section>
          <section className="section contact-section grid-paper" id="contact">
            <SectionTitle
              number="05"
              label={t("UNE IDÉE, UN PROJET ?", "HAVE A PROJECT IN MIND?")}
              title={t("Construisons la suite", "Let’s build what’s next")}
              word="TALK"
            />
            <div className="contact-grid">
              <div>
                <p className="contact-intro">
                  {t(
                    "Un projet, une collaboration ou simplement envie d’échanger sur la tech ? Je serais ravi d’en discuter.",
                    "A project, a collaboration, or just a conversation about tech? I’d love to hear from you.",
                  )}
                </p>
                <a className="email-link" href={"mailto:" + email}>
                  {email}
                  <ArrowUpRight />
                </a>
                <div className="socials">
                  <External href={linkedin}>
                    <Linkedin size={17} /> LinkedIn
                    <ArrowUpRight size={13} />
                  </External>
                  <External href={github}>
                    <Github size={17} /> GitHub
                    <ArrowUpRight size={13} />
                  </External>
                  <External href="https://wa.me/237686999883">
                    WhatsApp
                    <ArrowUpRight size={13} />
                  </External>
                </div>
              </div>
              <div className="contact-card">
                <MapPin size={23} />
                <p>Yaoundé, Cameroun</p>
                <span>
                  {t(
                    "À distance ou sur place, donnons vie à vos idées.",
                    "Remote or in person, let’s bring your ideas to life.",
                  )}
                </span>
                <a className="button primary" href={"mailto:" + email}>
                  {t("M’écrire un email", "Write me an email")}
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <ContactForm language={language} />
          </section>
        </main>
      )}
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <a className="brand" href="#home">
              <span className="brand-mark">✳</span>YVAN.TEKENG
            </a>
            <span className="footer-label">Portfolio</span>
            <p>
              {t(
                "Je développe des sites web et applications pour vos projets. De l’analyse des besoins à la réalisation, construisons des solutions utiles, fiables et sécurisées.",
                "I develop websites and applications for your projects. From requirements analysis to delivery, let’s build useful, reliable and secure solutions.",
              )}
            </p>
          </div>
          <div>
            <h3>{t("Liens rapides", "Quick links")}</h3>
            {navigation.map(([id, label]) => (
              <a key={id} href={"#" + id}>
                {label}
              </a>
            ))}
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>{t("Ce que je fais", "What I do")}</h3>
            <a href="#expertise">
              {t("Développement d’applications", "Application development")}
            </a>
            <a href="#expertise">
              {t("Analyse des systèmes", "Systems analysis")}
            </a>
            <a href="#expertise">
              {t("Cybersécurité & IoT", "Cybersecurity & IoT")}
            </a>
            <a href="#expertise">Data Science & IA</a>
          </div>
          <div>
            <h3>{t("Restons en contact", "Let’s connect")}</h3>
            <a href={"mailto:" + email}>{email}</a>
            <p>Yaoundé, Cameroun</p>
            <div className="socials">
              <External href={github}>
                <Github size={18} />
                GitHub
              </External>
              <External href={linkedin}>
                <Linkedin size={18} />
                LinkedIn
              </External>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Yvan Tekeng ·{" "}
            {t("Tous droits réservés.", "All rights reserved.")}
          </p>
          <a className="text-link" href="#home">
            {t("Retour en haut", "Back to top")}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
export default App;
