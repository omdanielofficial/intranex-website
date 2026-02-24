import { Mail } from 'lucide-react';

export const CloudHostingEnterpriseCTA = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Need a Cloud Hosting Solution with Larger Capacity?
                        </h2>
                        <p className="text-white/90 text-lg font-medium">
                            Contact our Sales Team to get a custom solution tailored to your specific requirements.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => (window as any).$crisp.push(['do', 'chat:open'])}
                            className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-all"
                        >
                            <Mail size={20} />
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
