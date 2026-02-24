import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/seo/types';
import type { SEOData } from '../config/seo/types';

interface SEOProps {
    data: SEOData;
}

export const SEO = ({ data }: SEOProps) => {
    const fullTitle = data.title.includes(siteConfig.name)
        ? data.title
        : `${data.title} | ${siteConfig.name}`;

    const ogUrl = siteConfig.url + (window.location.pathname === '/' ? '' : window.location.pathname);

    return (
        <Helmet>

            <title>{fullTitle}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords.join(', ')} />
            {data.canonical && <link rel="canonical" href={data.canonical} />}


            <meta property="og:type" content={data.ogType || 'website'} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            {data.ogImage && <meta property="og:image" content={data.ogImage} />}


            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl} />
            <meta property="twitter:title" content={data.title} />
            <meta property="twitter:description" content={data.description} />
            {data.ogImage && <meta property="twitter:image" content={data.ogImage} />}
            {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}
        </Helmet>
    );
};
