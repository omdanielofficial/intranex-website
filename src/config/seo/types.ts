export interface SEOData {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product';
    twitterHandle?: string;
    canonical?: string;
}

export const siteConfig = {
    name: 'Intranex',
    url: 'https://intranex.org',
    twitterHandle: '@intranexuk'
};
