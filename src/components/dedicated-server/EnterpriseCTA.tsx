

import { ArrowRight } from "lucide-react";

export const DedicatedServerEnterpriseCTA = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Need us to manage your dedicated server?
                        </h2>
                        <p className="text-white/90 text-lg font-medium">
                            Our enterprise solutions include monitoring, system administration, proactive maintenance, software installs, and so much more. Plus, get priority support from our team.
                        </p>
                    </div>
<div className="flex-shrink-0">
    <a
        href="/enterprise"
        className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-all"
    >
        Learn More
        <ArrowRight size={20} />
    </a>
</div>
                </div>
            </div>
        </section>
    );
};

