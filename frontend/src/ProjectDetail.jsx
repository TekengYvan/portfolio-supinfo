import LifelineVisual from "./LifelineVisual";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Check, Code2, Github, Mail, ExternalLink, Maximize2, X, Home, UserRound, CalendarDays, Layers } from "lucide-react";

export default function ProjectDetail({ project, projects, language, onSelect, onBack }) {
  const i = language === "fr" ? 0 : 1;
  const t = (fr, en) => i === 0 ? fr : en;
  const [slide, setSlide] = useState(0);
  const heading = useRef(null);
  const zoom = useRef(null);
  const touchStart = useRef(null);
  const gallery = project.gallery || (project.image ? [{ src: project.image, caption: project.caption }] : []);
  const related = [...projects.filter(p => p.slug !== project.slug && p.category === project.category), ...projects.filter(p => p.slug !== project.slug && p.category !== project.category)].slice(0, 3);
  useEffect(() => { heading.current?.focus({ preventScroll: true }); window.scrollTo(0, 0); }, [project.slug]);
  useEffect(() => {
    const dialog = zoom.current;
    const unlock = () => { document.body.style.overflow = ""; };
    dialog?.addEventListener("close", unlock);
    return () => { dialog?.removeEventListener("close", unlock); unlock(); };
  }, []);
  function openImage(index) { setSlide(index); zoom.current?.showModal(); document.body.style.overflow = "hidden"; }
  const advance = delta => setSlide(current => (current + delta + gallery.length) % gallery.length);
  const paragraphs = (project.about?.[i] || project.description[i]).split("\n\n");
  return (
    <main className="project-detail detail-editorial" id="main">
      <section className="detail-intro">
        <nav className="detail-breadcrumb" aria-label={t("Fil d’Ariane", "Breadcrumb")}>
          <a href="#home"><Home size={14} /> {t("Accueil", "Home")}</a><span>/</span>
          <button onClick={onBack}>{t("Projets", "Projects")}</button><span>/</span>
          <span aria-current="page">{project.name}</span>
        </nav>
        <p className="eyebrow">[ {t("PROJET", "PROJECT")} ] — {t("RÉALISATION", "SELECTED WORK")}</p>
        <h1 ref={heading} tabIndex={-1}>{project.name}</h1>
        <p className="detail-lead">{project.description[i]}</p>
        <div className="detail-byline">
          <span><Layers size={15} />{project.type[i]}</span>
          <span><UserRound size={15} />Yvan Tekeng</span>
          <span><CalendarDays size={15} />{project.period?.[i] || t("Version présentée · 2026", "Featured version · 2026")}</span>
        </div>
        {project.live && <a className="button primary detail-hero-link" href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{t("Voir le projet", "Live project")}</a>}
      </section>
      <div className="detail-body">
        <section className="gallery-section" aria-label={t("Galerie du projet", "Project gallery")}>
          <div className="gallery-heading detail-section-title"><h2>{t("Galerie du projet", "Project gallery")}</h2><span className="section-rule" />{gallery.length > 0 && <span className="mono">{gallery.length} {t("vues", "views")}</span>}</div>
          {gallery.length > 0 ? <div className="project-gallery-grid">
            {gallery.map((item, index) => <figure key={item.src + index}>
              <button className="gallery-tile" onClick={() => openImage(index)} aria-label={t("Agrandir : ", "Enlarge: ") + (item.caption?.[i] || project.name)}>
                {item.composite ? <LifelineVisual language={language} /> : <img src={item.src} alt={item.caption?.[i] || project.name} loading={index < 3 ? "eager" : "lazy"} decoding="async" />}
                <span className="gallery-index">{index + 1}/{gallery.length}</span><span className="gallery-tile-zoom"><Maximize2 size={20} /></span>
              </button>
              <figcaption>{item.caption?.[i]}</figcaption>
            </figure>)}
          </div> : <div className="gallery-unavailable"><Code2 size={35} /><strong>{project.name}</strong><p>{t("Les captures de cette réalisation ne sont pas disponibles actuellement.", "Screenshots of this project are not currently available.")}</p></div>}
          {project.galleryNote && <p className="gallery-source-note">{project.galleryNote[i]}</p>}
        </section>
        <div className="detail-columns">
          <div className="detail-narrative">
            <section><div className="detail-section-title"><h2>{t("À propos du projet", "About the project")}</h2><span className="section-rule" /></div>{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
            <section><div className="detail-section-title"><h2>{t("Points clés du projet", "Project highlights")}</h2><span className="section-rule" /></div><ul className="feature-list">{(project.highlights?.[i] || []).map(feature => <li key={feature}><Check size={17} /><span>{feature}</span></li>)}</ul></section>
            {project.note && <p className="detail-note">{project.note[i]}</p>}
          </div>
          <aside>
            <section className="detail-info-card"><h3>{t("Technologies", "Technologies")}</h3><div className="tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="detail-card-divider" /><h3>{t("Catégorie", "Category")}</h3><p className="detail-category">{project.domain?.[i] || project.category}</p></section>
            <section className="detail-info-card"><h3>{t("Informations", "Information")}</h3><dl>
              <div><dt>Type</dt><dd>{project.type[i]}</dd></div>
              <div><dt>{t("Présentation", "Presentation")}</dt><dd>{project.period?.[i] || "2026"}</dd></div>
              <div><dt>{t("Contribution", "Contribution")}</dt><dd>Yvan Tekeng</dd></div>
            </dl><div className="detail-card-divider" /><h3>{t("Liens", "Links")}</h3>
              {project.live && <a className="button primary" href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />{t("Voir le projet", "Live project")}<ArrowUpRight size={15} /></a>}
              {project.links.map(([label, url]) => <a className="detail-repo" href={url} key={url} target="_blank" rel="noopener noreferrer"><Github size={16} />{label === "GitHub" ? t("Code source", "Source code") : label}<ArrowUpRight size={15} /></a>)}
              {project.restricted && <p className="access-note">{t("Code privé · Accès GitHub requis.", "Private code · GitHub access required.")}</p>}
              {!project.links.length && <p>{t("Présentation et démonstration sur demande.", "Presentation and demo on request.")}</p>}
            </section>
          </aside>
        </div>
        <section className="detail-cta"><p>{t("Vous aimez ce projet ? Discutons du vôtre.", "Like this project? Let’s talk about yours.")}</p><a href="#contact" className="button primary">{t("Me contacter", "Contact me")}<Mail size={17} /></a></section>
        <section className="related-projects"><div className="gallery-heading"><h2>{t("Découvrir plus de projets", "Discover more projects")}</h2><button onClick={onBack} className="text-link">{t("Tous les projets", "All projects")}<ArrowRight size={16} /></button></div><div>{related.map(p => <button key={p.slug} onClick={() => onSelect(p)}>{p.image ? <img src={p.image} alt="" loading="lazy" /> : <Code2 size={28} />}<span>{p.name}<ArrowUpRight size={18} /></span></button>)}</div></section>
        <button className="text-link detail-back" onClick={onBack}><ArrowLeft size={16} />{t("Retour aux réalisations", "Back to projects")}</button>
      </div>
      <dialog className="lightbox project-lightbox" ref={zoom} aria-label={t("Galerie agrandie", "Enlarged gallery")}
        onClick={event => { if (event.target === event.currentTarget) zoom.current?.close(); }}
        onKeyDown={event => { if (event.key === "ArrowRight") { event.preventDefault(); advance(1); } if (event.key === "ArrowLeft") { event.preventDefault(); advance(-1); } }}
        onTouchStart={event => { touchStart.current = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }; }}
        onTouchEnd={event => { if (!touchStart.current) return; const dx = event.changedTouches[0].clientX - touchStart.current.x; const dy = event.changedTouches[0].clientY - touchStart.current.y; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) advance(dx < 0 ? 1 : -1); touchStart.current = null; }}>
        <div className="lightbox-toolbar"><span>{project.name}</span><span aria-live="polite">{slide + 1} / {gallery.length}</span><button className="icon-button" onClick={() => zoom.current?.close()} aria-label={t("Fermer l’image", "Close image")}><X /></button></div>
        {gallery[slide] && <div className="lightbox-media">{gallery[slide].composite ? <LifelineVisual language={language} /> : <img src={gallery[slide].src} alt={gallery[slide].caption?.[i] || project.name} />}</div>}
        <div className="lightbox-bottom"><button className="icon-button" disabled={gallery.length < 2} onClick={() => advance(-1)} aria-label={t("Image précédente", "Previous image")}><ChevronLeft /></button><p aria-live="polite">{gallery[slide]?.caption?.[i]}</p><button className="icon-button" disabled={gallery.length < 2} onClick={() => advance(1)} aria-label={t("Image suivante", "Next image")}><ChevronRight /></button></div>
      </dialog>
    </main>
  );
}