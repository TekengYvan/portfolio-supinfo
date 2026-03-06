import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
    const { language, t } = useLanguage();

    const content = {
        fr: "Futur Ingénieur des Travaux en Génie Logiciel à l'IAI-Cameroun, etudiant en 3eme année, je suis TEKENG DJANG YVAN DUPLEX PACOM. Passionné par l'innovation technologique et la cybersécurité, mon objectif est de concevoir des solutions numériques d'envergure, sécurisées et performantes. Mon parcours académique d'excellence et ma soif de défis me poussent à viser les plus hauts standards de l'ingénierie logicielle.",
        en: "As a future Works Engineer in Software Engineering at IAI-Cameroon, Year 3 student, I am TEKENG DJANG YVAN DUPLEX PACOM. Passionate about technological innovation and cybersecurity, my goal is to design large-scale, secure, and high-performance digital solutions. My excellent academic background and thirst for challenges drive me to aim for the highest standards in software engineering."
    };

    const journey = [
        { year: '2016 - 2023', title: 'Cycle Secondaire', company: 'Lycée Bilingue de Bobongo', desc: 'Obtention du GCE Ordinary et Advanced Level (Option Science).' },
        { year: '2023 - Présent', title: 'Génie Logiciel', company: 'IAI Cameroun', desc: 'Diplome de Technicien Supérieur (DTS), spécialisation Développement & Sécurité., En cours D obtention de la Licence 3 en Génie Logiciel' },
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12"> 
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-primary-light dark:text-primary-dark">
                            {t('aboutTitle')}
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            {content[language]}
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="h-0.5 w-12 bg-primary-light"></div>
                            <span className="font-bold">Genie Logiciel - IAI Cameroon</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-1/2"
                    >
                        <div className="timeline">
                            {journey.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="glass p-6 rounded-3xl shadow-xl border-white/20 dark:border-white/5 hover:scale-[1.05] transition-all">
                                        <span className="text-primary-light font-extrabold text-sm uppercase tracking-wider">{item.year}</span>
                                        <h3 className="font-bold text-xl mt-1">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
