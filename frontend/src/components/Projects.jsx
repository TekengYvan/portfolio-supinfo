import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import accidentImg from '../assets/accident.jpeg';
import malwareImg from '../assets/malware.jpeg';
import cybersecurityImg from '../assets/cybesecurity.jpeg';
import campusImg from '../assets/campus.jpeg';
import javaImg from '../assets/java.jpeg';


const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: t('proj1Title'),
            desc: t('proj1Desc'),
            tech: ['React', 'Python', 'Android', 'Node.js', 'IoT'],
            image: accidentImg,
            category: 'Mobile',
            github: '#',
            live: '#'
        },
        {
            title: t('proj2Title'),
            desc: t('proj2Desc'),
            tech: ['Python', 'Cybersecurity', 'Analysis'],
            image: malwareImg,
            category: 'Security',
            github: '#',
            live: '#'
        },
        {
            title: t('proj3Title'),
            desc: t('proj3Desc'),
            tech: ['Cisco', 'TryHackMe', 'Pentesting'],
            image: cybersecurityImg,
            category: 'Security',
            github: '#',
            live: '#',
            status: t('statusCompleted')
        },
        {
            title: t('proj4Title'),
            desc: t('proj4Desc'),
            tech: ['React', 'Node.js', 'Firebase'],
            // image: campusImg,
            category: 'Web',
            github: 'https://github.com/Rean64/S-CAMP',
            live: '#',
            status: t('statusGroup')
        },
        {
            title: t('proj5Title'),
            desc: t('proj5Desc'),
            tech: ['Java', 'Swing', 'SQL'],
            image: javaImg,
            category: 'Desktop',
            github: 'https://github.com/TekengYvan/cosmetic_pro',
            live: '#',
            status: t('statusCompleted')
        },
        {
            title: t('proj6Title'),
            desc: t('proj6Desc'),
            tech: ['PHP', 'JavaScript', 'SQL'],
            // image: accidentImg,
            category: 'Web',
            github: 'https://github.com/Rean64/IAI-PROJECT',
            live: '#',
            status: t('statusInProgress')
        },
        {
            title: t('proj7Title'),
            desc: t('proj7Desc'),
            tech: ['Mobile', 'Orders', 'Web'],
            // image: malwareImg,
            category: 'Mobile',
            github: 'https://github.com/Rean64/contour',
            live: '#',
            status: t('statusInProgress')
        }
    ];

    const categories = [
        { id: 'All', label: t('catAll') },
        { id: 'Web', label: t('catWeb') },
        { id: 'Mobile', label: t('catMobile') },
        { id: 'Security', label: t('catSecurity') },
        { id: 'Desktop', label: t('catDesktop') },
    ];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary-light dark:text-primary-dark">
                    {t('projectsTitle')}
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat.id
                                ? 'bg-primary-light text-white'
                                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary-light/20 transition-all group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-primary-light/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                    <a href={project.github} className="p-3 bg-white rounded-full text-primary-light hover:scale-110 transition-all"><Github size={20} /></a>
                                    <a href={project.live} className="p-3 bg-white rounded-full text-primary-light hover:scale-110 transition-all"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-xl">{project.title}</h3>
                                    {project.status && (
                                        <span className="text-[10px] bg-primary-light/20 text-primary-light px-2 py-1 rounded-full font-bold">
                                            {project.status}
                                        </span>
                                    )}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed font-medium">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] uppercase font-extrabold px-2 py-1 bg-primary-light/10 dark:bg-white/10 rounded-md text-primary-light dark:text-primary-light border border-primary-light/20 dark:border-white/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
