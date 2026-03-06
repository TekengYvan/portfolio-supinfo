import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Download, Rocket, Award, Code, Monitor } from 'lucide-react';
import photo from '../assets/campus.jpeg';
import cv from '../assets/Cv tekeng.pdf';

const Hero = () => {
    const { t } = useLanguage();

    const stats = [
        { icon: <Rocket className="text-blue-500" />, label: t('statsProjets') },
        { icon: <Award className="text-yellow-500" />, label: t('statsYears') },
        { icon: <Monitor className="text-green-500" />, label: t('statsSkills') },
    ];

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.download = 'Cv_tekeng.pdf';
        link.click();
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-light/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-dark/10 rounded-full blur-[150px] animate-bounce-slow"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="mb-10 relative"
                >
                    <div className="absolute inset-0 bg-primary-light/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="w-44 h-44 md:w-52 md:h-52 rounded-full glass border-2 border-white/30 dark:border-white/10 p-1.5 shadow-2xl relative z-10">
                        <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                            <img src={photo} alt="TEKENG DJANG YVAN DUPLEX PACOM" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-tight"
                >
                    TEKENG DJANG YVAN <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-600">
                        DUPLEX PACOM
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-8 uppercase tracking-[0.2em]"
                >
                    {t('heroTitle')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed"
                >
                    {t('heroSubtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-6 mb-20 w-full sm:w-auto"
                >
                    <button
                        onClick={handleDownloadCV}
                        className="flex items-center justify-center space-x-3 bg-primary-light dark:bg-primary-dark text-white px-10 py-4 rounded-3xl font-bold shadow-2xl hover:shadow-primary-light/40 hover:-translate-y-1 transition-all active:scale-95"
                    >
                        <Download size={22} />
                        <span>{t('downloadCV')}</span>
                    </button>
                    <button
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center space-x-3 glass text-primary-light dark:text-white px-10 py-4 rounded-3xl font-bold hover:bg-primary-light/10 dark:hover:bg-white/5 border-primary-light/20 shadow-xl transition-all active:scale-95"
                    >
                        <span>{t('viewProjects')}</span>
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="glass p-8 rounded-[2rem] shadow-2xl border-white/20 dark:border-white/5 hover:-translate-y-2 transition-transform cursor-default group"
                        >
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-primary-light/10 dark:bg-white/5 rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <span className="font-extrabold text-lg md:text-xl tracking-tight leading-tight">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
