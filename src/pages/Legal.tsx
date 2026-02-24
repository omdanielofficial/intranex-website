import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { legalDocuments } from '../config/legal';
import ReactMarkdown from 'react-markdown';
import { ChevronRight, FileText } from 'lucide-react';

const Legal = () => {
    const { docId } = useParams();
    const navigate = useNavigate();


    const activeDocId = docId || legalDocuments[0].id;
    const activeDoc = legalDocuments.find(d => d.id === activeDocId);


    useEffect(() => {
        if (!activeDoc && !docId) {
            navigate(`/legal/${legalDocuments[0].id}`, { replace: true });
        } else if (!activeDoc && docId) {
            navigate(`/legal/${legalDocuments[0].id}`, { replace: true });
        }
    }, [activeDoc, docId, navigate]);

    if (!activeDoc) return null;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <Navbar />


            <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary pt-32 pb-12 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Legal Center
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl">
                        Transparency is key. Here you will find all the details about our policies, terms, and agreements.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-10">


                    <div className="w-full lg:w-1/4 flex-shrink-0">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden sticky top-28">
                            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Documents</span>
                            </div>
                            <nav className="flex flex-col p-2">
                                {legalDocuments.map((doc) => (
                                    <Link
                                        key={doc.id}
                                        to={`/legal/${doc.id}`}
                                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeDocId === doc.id
                                            ? 'bg-brand-primary/10 text-brand-primary'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText size={18} className={activeDocId === doc.id ? 'text-brand-primary' : 'text-gray-400'} />
                                            {doc.title}
                                        </div>
                                        {activeDocId === doc.id && (
                                            <ChevronRight size={16} />
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>


                    <div className="flex-1 w-full max-w-4xl">
                        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
                            <div className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {activeDoc.title}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Last Updated: {activeDoc.updatedAt}
                                </p>
                            </div>

                            <article className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-brand-primary prose-strong:text-gray-900 dark:prose-strong:text-white prose-p:mb-6 prose-headings:mb-4 prose-headings:mt-8 prose-ul:mb-6 prose-li:mb-2">
                                <ReactMarkdown>
                                    {activeDoc.content}
                                </ReactMarkdown>
                            </article>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Legal;
