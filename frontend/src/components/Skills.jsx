import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, GitBranch, Terminal, Award } from 'lucide-react';

const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t('skillTech'),
            icon: <Code2 className="text-blue-500" />,
            skills: [
                { name: t('skill_python'), level: 95 },
                { name: t('skill_php'), level: 85 },
                { name: t('skill_arch'), level: 85 },
                { name: t('skill_cyber'), level: 80 },
                { name: t('skill_java'), level: 85 },
                { name: t('skill_fullstack'), level: 90 },
            ]
        },
        {
            title: t('skillSoft'),
            icon: <Layout className="text-purple-500" />,
            skills: [
                { name: t('skill_prob'), level: 95 },
                { name: t('skill_team'), level: 90 },
                { name: t('skill_learn'), level: 95 },
                { name: t('skill_time'), level: 85 },
                { name: t('skill_adap'), level: 90 },
            ]
        },
        {
            title: t('skillCert'),
            icon: <Award className="text-yellow-500" />,
            skills: [
                { name: t('cert_python'), level: 100 },
                { name: t('cert_cisco'), level: 100 },
                { name: t('cert_hacker'), level: 100 },
                { name: t('cert_ssi'), level: 100 },
                { name: t('cert_ibm'), level: 100 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary-light dark:text-primary-dark">
                    {t('skillsTitle')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-3xl shadow-lg border-white/20 dark:border-white/5 hover:scale-[1.02] transition-all"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">{category.icon}</span>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                whileInView={{ width: `${skill.level}%` }}
                                                initial={{ width: 0 }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                className="h-full bg-gradient-to-r from-primary-light to-primary-dark"
                                            ></motion.div>
                                        </div>
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

export default Skills;
