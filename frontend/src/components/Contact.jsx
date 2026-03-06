import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        setStatus('Sending...');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setStatus('Success!');
                e.target.reset();
            } else {
                setStatus('Error.');
            }
        } catch (err) {
            setStatus('Error.');
        }
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary-light dark:text-primary-dark">
                    {t('contactTitle')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        className="flex items-center space-x-4 p-6 glass rounded-3xl shadow-lg border-white/20 dark:border-white/5"
                    >
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold opacity-50">Email</p>
                            <a href="mailto:tekengyvan2@gmail.com" className="font-bold hover:text-primary-light transition-colors">tekengyvan2@gmail.com</a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        className="flex items-center space-x-4 p-6 glass rounded-3xl shadow-lg border-white/20 dark:border-white/5"
                    >
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold opacity-50">WhatsApp</p>
                            <a href="https://wa.me/237686999883" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary-light transition-colors">+237 686 999 883</a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    className="glass-card p-10 rounded-[3rem] shadow-2xl border-white/30 dark:border-slate-800/50"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-bold opacity-70">{t('name')}</label>
                                <input name="name" required type="text" className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-light outline-none" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-bold opacity-70">{t('email')}</label>
                                <input name="email" required type="email" className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-light outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold opacity-70">{t('subject')}</label>
                            <input name="subject" required type="text" className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-light outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold opacity-70">{t('message')}</label>
                            <textarea name="message" required rows="5" className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-primary-light outline-none resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-primary-light dark:bg-primary-dark text-white p-4 rounded-xl font-bold hover:scale-[1.02] transition-all">
                            <Send size={20} />
                            <span>{t('send')}</span>
                        </button>
                        {status && <p className="text-center font-bold text-primary-light">{status}</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
