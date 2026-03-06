import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const { darkMode, setDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t('navHome'), to: 'home' },
        { name: t('navAbout'), to: 'about' },
        { name: t('navSkills'), to: 'skills' },
        { name: t('navProjects'), to: 'projects' },
        { name: t('navExperience'), to: 'experience' },
        { name: t('navEducation'), to: 'education' },
        { name: t('navContact'), to: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 glass backdrop-blur-xl border-b dark:border-white/5 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-2xl text-primary-light dark:text-primary-dark">
                        PORTFOLIO
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                            className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <Globe size={20} />
                            <span className="text-sm font-bold">{language.toUpperCase()}</span>
                        </button>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass backdrop-blur-3xl border-t dark:border-white/5 overflow-hidden"
                >
                    <div className="px-4 py-6 space-y-4 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-2xl text-lg font-semibold hover:bg-primary-light/10 dark:hover:bg-white/5 transition-all active:scale-95"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
