import { promoConfig } from '../../config/promo';
import { Copy, Check, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';


const CountdownTimer = ({ endDate }: { endDate: string }) => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(endDate) - +new Date();
            let timeLeftData = null;

            if (difference > 0) {
                timeLeftData = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeftData;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    if (!timeLeft) {
        return (
            <div className="flex justify-center items-center gap-2 mb-0 text-sm font-medium text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-900/10 px-4 py-2 rounded-lg border border-red-100 dark:border-red-900/20">
                <Clock size={16} />
                <span>Offer Expired</span>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center gap-2 mb-0 text-sm font-medium text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 px-4 py-2 rounded-lg border border-amber-100 dark:border-amber-900/20">
            <Clock size={16} />
            <span>
                Ends in <span className="font-bold">
                    {timeLeft.days > 0 && `${timeLeft.days}d `}
                    {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
            </span>
        </div>
    );
};

export const PromoList = () => {

    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (code: string, id: string) => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(code);
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = code;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Fallback copy failed', err);
            }
            document.body.removeChild(textArea);
        }
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {promoConfig.offers.map((offer) => (
                        <div key={offer.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] relative bg-white dark:bg-gray-800 rounded-xl flex flex-col overflow-hidden transition-all border border-gray-200 dark:border-gray-700">


                            <div className="absolute top-0 right-0 left-0 flex justify-center -mt-0">
                                <div className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg flex items-center gap-1">
                                    {offer.quota}
                                </div>
                            </div>

                            <div className="p-8 pb-10 text-center flex-grow flex flex-col items-center">

                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight min-h-[56px] flex items-center justify-center mt-6">
                                    {offer.title}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed px-2">
                                    {offer.description}
                                </p>


                                <div className="w-full mb-6">
                                    <div
                                        className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-600 group cursor-pointer hover:border-brand-primary transition-all"
                                        onClick={() => handleCopy(offer.code, offer.id)}
                                    >
                                        <span className="font-mono text-lg font-bold text-gray-800 dark:text-white tracking-widest">{offer.code}</span>
                                        <div className={`p-1.5 rounded-full transition-all duration-300 ${copiedId === offer.id ? 'text-emerald-500' : 'text-gray-400 group-hover:text-brand-primary'}`}>
                                            {copiedId === offer.id ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
                                        </div>
                                    </div>
                                    <div className="mt-1.5 text-[10px] text-gray-400 dark:text-gray-500 font-medium text-center">
                                        {copiedId === offer.id ? <span className="text-emerald-500 font-bold">Copied!</span> : "Click to copy code"}
                                    </div>
                                </div>



                                <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-6"></div>


                                <div className="w-full text-left mb-8 flex-1 pl-1">
                                    <ul className="space-y-3">
                                        {offer.terms.map((term, tIndex) => (
                                            <li key={tIndex} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center">
                                                    <Check size={10} strokeWidth={4} />
                                                </div>
                                                <span className="leading-relaxed flex-1">{term}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full mt-auto">

                                    <CountdownTimer endDate={offer.endDate} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
