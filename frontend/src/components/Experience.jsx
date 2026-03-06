import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            company: 'Welldone & Co Enterprise',
            position: t('expPos'),
            period: '06/2025 - 09/2025',
            location: 'Yaoundé, Cameroun',
            description: t('expDesc'),
            achievements: [
                t('expAch1'),
                t('expAch2'),
                t('expAch3'),
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary-light dark:text-primary-dark">
                    {t('experienceTitle')}
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-[2.5rem] shadow-2xl border-white/20 dark:border-white/5 hover:border-primary-light transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary-light/10 text-primary-light rounded-2xl">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.position}</h3>
                                        <p className="text-primary-light font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-sm opacity-60">
                                    <div className="flex items-center space-x-2">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-4 text-gray-600 dark:text-gray-400 italic">
                                {exp.description}
                            </p>

                            <ul className="space-y-2">
                                {exp.achievements.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start space-x-3 text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-primary-light rounded-full flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
