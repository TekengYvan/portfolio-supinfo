import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'fr');

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    const t = (key) => {
        const translations = {
            fr: {
                navHome: 'Accueil',
                navAbout: 'À propos',
                navSkills: 'Compétences',
                navProjects: 'Projets',
                navExperience: 'Expérience',
                navEducation: 'Formation',
                navContact: 'Contact',
                heroTitle: 'Futur Ingénieur des Travaux |Génie Logiciel',
                heroSubtitle: 'Passionné de Cybersécurité, Développement Web (PHP, ExpressJS,...) & Mobile. Étudiant d\'élite à l\'IAI-Cameroun.',
                downloadCV: 'Télécharger CV',
                viewProjects: 'Voir mes projets',
                statsProjets: 'Expert en Projets',
                statsYears: 'Excellence Académique',
                statsSkills: 'Passionné de Cybersécurité',
                aboutTitle: 'À propos de moi',
                aboutBio: 'Je suis TEKENG DJANG YVAN DUPLEX PACOM, futur Ingénieur des Travaux en Génie Logiciel à l\'IAI-Cameroun. Passionné par l\'innovation, j\'excelle dans la conception d\'architectures sécurisées et le développement full-stack moderne (React, Node, Express, PHP). Détenteur d\'une certification professionnelle en Python.',
                skillsTitle: 'Expertise & Certifications',
                projectsTitle: 'Réalisations Majeures',
                experienceTitle: 'Expérience Professionnelle',
                educationTitle: 'Ma Formation',
                contactTitle: 'Me Contacter',
                send: 'Envoyer',
                name: 'Nom',
                email: 'Email',
                subject: 'Sujet',
                message: 'Message',
                // Projects
                proj1Title: 'Détection d\'Accidents Intelligente (Web & Mobile)',
                proj1Desc: 'Conception d\'un système robuste détectant les accidents et envoyant des alertes automatiques avec coordonnées GPS via Web et Mobile.',
                proj2Title: 'Analyse de Menaces (Hackathon)',
                proj2Desc: 'Système d\'analyse de sécurité et d\'atténuation des menaces développé lors d\'un hackathon.',
                proj3Title: 'Lab de Simulation d\'Attaques',
                proj3Desc: 'Mise en place de laboratoires réseaux sécurisés pour la simulation d\'attaques (Cisco).',
                proj4Title: 'S-CAMP (Projet de Groupe)',
                proj4Desc: 'Application web collaborative pour la gestion et l\'organisation de camps scientifiques.',
                proj5Title: 'Cosmetic Pro (Desktop)',
                proj5Desc: 'Application Java Desktop complète dédiée à la gestion des stocks et inventaires de produits cosmétiques.',
                proj6Title: 'IAI-PROJECT (Portail Assurance)',
                proj6Desc: 'Portail académique de gestion d\'assurance scolaire, incluant le suivi et les services étudiants.',
                proj7Title: 'Contour (Service Cordonnerie)',
                proj7Desc: 'Plateforme en ligne permettant de commander des services de cordonnerie et de lavage de chaussures en ligne.',
                // Status
                statusCompleted: 'Terminé',
                statusInProgress: 'En cours',
                statusGroup: 'Projet de Groupe',
                // Categories
                catAll: 'Tous',
                catWeb: 'Web',
                catMobile: 'Mobile',
                catSecurity: 'Sécurité',
                catDesktop: 'Desktop',
                // Skills
                skillTech: 'Compétences Techniques',
                skillSoft: 'Soft Skills',
                skillCert: 'Certifications',
                // Technical Skills items
                skill_python: 'Python (Certifié)',
                skill_php: 'PHP & ExpressJS',
                skill_arch: 'Architecture Logicielle & UML',
                skill_cyber: 'Cybersécurité',
                skill_java: 'Java & C / C#',
                skill_fullstack: 'Full-stack (React/Node)',
                // Soft Skills items
                skill_prob: 'Résolution de Problèmes',
                skill_team: 'Travail d\'Équipe',
                skill_learn: 'Capacité d\'Apprentissage',
                skill_time: 'Gestion du Temps',
                skill_adap: 'Adaptabilité',
                // Certifications items
                cert_python: 'Python Professional Cert',
                cert_cisco: 'Cisco Jr Cybersecurity',
                cert_hacker: 'Hacker Éthique (Netcad)',
                cert_ssi: 'SSI (SecNumAcademie)',
                cert_ibm: 'IBM Cybersecurity',
                // Experience
                expPos: 'Stagiaire Étudiant',
                expDesc: 'Startup technologique spécialisée dans les solutions logicielles.',
                expAch1: 'Installation et configuration de systèmes informatiques.',
                expAch2: 'Participation à la gestion de la sécurité réseau.',
                expAch3: 'Support technique aux utilisateurs internes.',
                // Education
                edu1Degree: 'Licence Professionnelle & Ingénieur des Travaux en Génie Logiciel (En cours)',
                edu1Prog: 'Programmation',
                edu1Web: 'Web & Mobile',
                edu1GL: 'Génie Logiciel',
                edu1Sec: 'Sécurité',
                edu2Degree: 'GCE Advance Level & Ordinary Level',
                edu2Sci: 'Sciences',
                edu3Degree: 'First School Leaving Certificate',
                edu2Sci: 'Sciences',
                edu3Degree: 'First School Leaving Certificate',
                edu3Prim: 'Primaire',
                // Course Items
                course_algo: 'Algorithmique',
                course_sd: 'Structures de Données',
                course_modeling: 'Modélisation UML',
                course_arch: 'Architecture Logicielle',
                course_risk: 'Analyse de Risques',
                course_primary: 'Base des Sciences',
                course_lang: 'Langues',
                course_culture: 'Culture Générale',
            },
            en: {
                navHome: 'Home',
                navAbout: 'About',
                navSkills: 'Skills',
                navProjects: 'Projects',
                navExperience: 'Experience',
                navEducation: 'Education',
                navContact: 'Contact',
                heroTitle: 'Future Works Engineer | Software Engineering',
                heroSubtitle: 'Passionate about Cybersecurity, Web Development (PHP, ExpressJS,...) & Mobile. Elite student at IAI-Cameroon.',
                downloadCV: 'Download CV',
                viewProjects: 'View Projects',
                statsProjets: 'Expert in Projects',
                statsYears: 'Academic Excellence',
                statsSkills: 'Cybersecurity Enthusiast',
                aboutTitle: 'About Me',
                aboutBio: 'I am TEKENG DJANG YVAN DUPLEX PACOM, a future Works Engineer in Software Engineering at IAI-Cameroon. Passionate about innovation, I excel in secure architecture design and modern full-stack development (React, Node, Express, PHP). Holder of a professional Python certification.',
                skillsTitle: 'Expertise & Certifications',
                projectsTitle: 'Major Achievements',
                experienceTitle: 'Professional Experience',
                educationTitle: 'My Education',
                contactTitle: 'Contact Me',
                send: 'Send',
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                // Projects
                proj1Title: 'Intelligent Accident Detection (Web & Mobile)',
                proj1Desc: 'Conception and development of a robust system capable of detecting car accidents and sending automatic emergency messages with GPS via Web and Mobile.',
                proj2Title: 'Threat Analysis (Hackathon)',
                proj2Desc: 'Security analysis and threat mitigation system developed during a cybersecurity hackathon.',
                proj3Title: 'Attack Simulation Lab',
                proj3Desc: 'Practical implementation of secure network labs for attack simulation (Cisco).',
                proj4Title: 'S-CAMP (Group Project)',
                proj4Desc: 'Collaborative web application for the management and organization of science camps.',
                proj5Title: 'Cosmetic Pro (Desktop)',
                proj5Desc: 'Full Java Desktop application dedicated to managing cosmetic product stocks and inventory.',
                proj6Title: 'IAI-PROJECT (Insurance Portal)',
                proj6Desc: 'Academic management portal for school insurance, including tracking and student services.',
                proj7Title: 'Contour (Mending Service)',
                proj7Desc: 'Online platform giving the possibility to order shoe menders and washing services online.',
                // Status
                statusCompleted: 'Completed',
                statusInProgress: 'In Progress',
                statusGroup: 'Group Project',
                // Categories
                catAll: 'All',
                catWeb: 'Web',
                catMobile: 'Mobile',
                catSecurity: 'Security',
                catDesktop: 'Desktop',
                // Skills
                skillTech: 'Technical Skills',
                skillSoft: 'Soft Skills',
                skillCert: 'Certifications',
                // Technical Skills items
                skill_python: 'Python (Certified)',
                skill_php: 'PHP & ExpressJS',
                skill_arch: 'Software Architecture & UML',
                skill_cyber: 'Cybersecurity',
                skill_java: 'Java & C / C#',
                skill_fullstack: 'Full-stack (React/Node)',
                // Soft Skills items
                skill_prob: 'Problem Solving',
                skill_team: 'Teamwork',
                skill_learn: 'Learning Ability',
                skill_time: 'Time Management',
                skill_adap: 'Adaptability',
                // Certifications items
                cert_python: 'Python Professional Cert',
                cert_cisco: 'Cisco Jr Cybersecurity',
                cert_hacker: 'Ethical Hacker (Netcad)',
                cert_ssi: 'SSI (SecNumAcademie)',
                cert_ibm: 'IBM Cybersecurity',
                // Experience
                expPos: 'Student Intern',
                expDesc: 'Tech startup specializing in software solutions.',
                expAch1: 'Installation and configuration of computer systems.',
                expAch2: 'Participation in network security management.',
                expAch3: 'Technical support for internal users.',
                // Education
                edu1Degree: 'Professional Bachelor & Works Engineer in Software Engineering (In Progress)',
                edu1Prog: 'Programming',
                edu1Web: 'Web & Mobile',
                edu1GL: 'Software Engineering',
                edu1Sec: 'Security',
                edu2Degree: 'GCE Advanced Level & Ordinary Level',
                edu2Sci: 'Sciences',
                edu3Degree: 'First School Leaving Certificate',
                edu2Sci: 'Sciences',
                edu3Degree: 'First School Leaving Certificate',
                edu3Prim: 'Primary',
                // Course Items
                course_algo: 'Algorithms',
                course_sd: 'Data Structures',
                course_modeling: 'UML Modeling',
                course_arch: 'Software Architecture',
                course_risk: 'Risk Analysis',
                course_primary: 'Science Basics',
                course_lang: 'Languages',
                course_culture: 'General Culture',
            }
        };
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
