import { Send, CheckCircle2, Loader2, MessageSquare, Mail, Phone, Info } from 'lucide-react';
import { useState } from 'react';

export const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'Cloud VPS & Hosting',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');


        const subject = encodeURIComponent(`[Contact Form] ${formData.subject} - ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Service: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoUrl = `mailto:support@voltera.cloud?subject=${subject}&body=${body}`;

        setTimeout(() => {
            window.location.href = mailtoUrl;
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1200);
    };

    return (
        <section className="py-24 bg-white dark:bg-gray-950 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">


                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex flex-col">
                            <div className="inline-block px-4 py-1.5 rounded-full font-bold text-xs bg-brand-primary/10 text-brand-primary w-fit mb-6 uppercase tracking-wider">
                                Contact Channels
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                                Reach Our Experts
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    { icon: MessageSquare, title: "Live Chat", value: "24/7 Availability" },
                                    { icon: Mail, title: "Official Email", value: "support@voltera.cloud" },
                                    { icon: Phone, title: "Call Center", value: "+62 21 5550 1234" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-brand-primary">
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{item.title}</div>
                                            <div className="text-gray-900 dark:text-white font-bold">{item.value}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 font-medium">
                                <p className="flex items-center gap-2">
                                    <Info size={14} />
                                    Average response time: 15 minutes
                                </p>
                            </div>
                        </div>


                        <div className="bg-brand-primary rounded-xl p-8 text-white">
                            <h4 className="font-bold text-lg mb-2">Headquarters</h4>
                            <p className="text-white/80 text-sm leading-relaxed font-medium">
                                PT. Voltera Cloud Indonesia<br />
                                Menara Imperium, Lt. 15<br />
                                Jakarta, Indonesia 12980
                            </p>
                        </div>
                    </div>


                    <div className="w-full lg:w-2/3">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800">

                            {status === 'success' ? (
                                <div className="py-12 flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Mail Client Opened!</h3>
                                    <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 font-medium">
                                        Your message is ready. Please click "Send" in your email application to reach us.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg transition-all"
                                    >
                                        Back to Form
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-10 text-center lg:text-left">
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Send Us a Message</h2>
                                        <div className="h-1 w-12 bg-brand-primary rounded-full mx-auto lg:mx-0"></div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all dark:text-white font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all dark:text-white font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all dark:text-white font-medium"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">Subject</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all dark:text-white font-medium cursor-pointer"
                                            >
                                                <option>Cloud VPS & Hosting</option>
                                                <option>Dedicated Servers</option>
                                                <option>Colocation Services</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 ml-1 uppercase tracking-wider">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                required
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all dark:text-white font-medium resize-none text-sm"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={status === 'sending'}
                                                className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 rounded-lg transition-all duration-300 transform active:scale-95 text-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                                            >
                                                {status === 'sending' ? (
                                                    <>
                                                        Processing...
                                                        <Loader2 className="animate-spin" size={20} />
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message Now
                                                        <Send size={20} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
