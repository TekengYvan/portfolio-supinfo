import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Settings, Layout, Globe, Smartphone, ShieldCheck } from 'lucide-react';

const Education = () => {
    const { t } = useLanguage();

    const educationData = [
        {
            institution: 'Institut Africain de L\'informatique',
            degree: t('edu1Degree'),
            period: '10/2023 - Présent',
            courses: [
                { category: t('edu1Prog'), icon: <Settings size={16} />, items: [t('course_algo'), 'C / C#', 'Java', 'Python', t('course_sd')] },
                { category: t('edu1Web'), icon: <Globe size={16} />, items: ['HTML/CSS/JS', 'React', 'Node.js', 'Android'] },
                { category: t('edu1GL'), icon: <Layout size={16} />, items: [t('course_modeling'), 'SQL', t('course_arch')] },
                { category: t('edu1Sec'), icon: <ShieldCheck size={16} />, items: [t('navSkills'), t('course_risk'), 'Labs Cisco'] },
            ]
        },
        {
            institution: 'Lycée Bilingue de Bobongo Petit Paris',
            degree: t('edu2Degree'),
            period: '09/2016 - 08/2023',
            courses: [
                { category: t('edu2Sci'), icon: <BookOpen size={16} />, items: ['Mathématiques', 'Physique', 'Chimie', 'SVT / Biologie', 'Informatique'] },
            ]
        },
        {
            institution: 'Groupe Scolaire Bilingue Les Petits Génie',
            degree: t('edu3Degree'),
            period: '09/2010 - 06/2015',
            courses: [
                { category: t('edu3Prim'), icon: <BookOpen size={16} />, items: [t('course_primary'), t('course_lang'), t('course_culture')] },
            ]
        }
    ];

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary-light dark:text-primary-dark">
                    {t('educationTitle')}
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            className="glass p-8 rounded-[2.5rem] shadow-2xl border-white/20 dark:border-white/5"
                        >
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="p-3 bg-primary-light/10 text-primary-light rounded-2xl">
                                    <GraduationCap size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{edu.institution}</h3>
                                    <p className="font-medium opacity-70">{edu.degree} | {edu.period}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {edu.courses.map((course, cIdx) => (
                                    <div key={cIdx} className="space-y-4">
                                        <div className="flex items-center space-x-2 text-primary-light font-bold">
                                            {course.icon}
                                            <span className="text-sm uppercase tracking-wider">{course.category}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {course.items.map((item, iIdx) => (
                                                <li key={iIdx} className="text-sm opacity-80 flex items-center space-x-2">
                                                    <div className="w-1 h-1 bg-primary-light rounded-full"></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
