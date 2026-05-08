export const SITE_URL = 'https://riwandi.com';

export const SEO_DEFAULTS = {
    title: 'Riwandi — Frontend Engineer',
    description:
        'Senior Frontend Engineer with 6+ years building scalable web applications. Specializing in React, Next.js, TypeScript & Tailwind CSS across fintech, media & digital platforms.',
    ogImage: `${SITE_URL}/og-image.png`,
    twitterHandle: '@bbguenaik',
} as const;

export function generatePersonJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Riwandi',
        url: SITE_URL,
        jobTitle: 'Senior Frontend Engineer',
        worksFor: { '@type': 'Organization', name: 'Bank Saqu' },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressCountry: 'ID',
        },
        sameAs: [
            'https://github.com/rwndy',
            'https://linkedin.com/in/riwandi',
            'https://twitter.com/bbguenaik',
        ],
        knowsAbout: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Redux',
            'Frontend Architecture',
        ],
    };
}

export function generateWebsiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SEO_DEFAULTS.title,
        url: SITE_URL,
        description: SEO_DEFAULTS.description,
    };
}
