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
    name: 'Voltera Cloud',
    url: 'https://voltera.cloud',
    twitterHandle: '@volteracloud'
};
