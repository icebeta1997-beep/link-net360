export default function JsonLd() {
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://link-net360.com/#organization',
        name: 'Link Net360 Technologies — FZCO',
        url: 'https://link-net360.com',
        logo: {
            '@type': 'ImageObject',
            url: 'https://link-net360.com/og-image.png',
            width: 1200,
            height: 630,
        },
        description:
            'Leading IT Solutions & Infrastructure Provider in UAE, specializing in networking, cybersecurity, cloud services, and managed IT support.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+971-00-000-0000',
            contactType: 'customer service',
            email: 'info@linknet360.com',
            areaServed: 'AE',
            availableLanguage: ['en', 'ar'],
        },
        sameAs: [
            'https://www.linkedin.com/',
            'https://twitter.com/',
            'https://www.facebook.com/',
        ],
        foundingDate: '2014',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 10,
            maxValue: 50,
        },
        knowsAbout: [
            'IT Infrastructure',
            'Network Design',
            'Cybersecurity',
            'Cloud Services',
            'VoIP Solutions',
            'Server Management',
            'Managed IT Support',
        ],
    };

    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://link-net360.com/#website',
        url: 'https://link-net360.com',
        name: 'Link Net360 Technologies',
        description:
            'Enterprise IT Solutions & Infrastructure Provider in Dubai, UAE',
        publisher: {
            '@id': 'https://link-net360.com/#organization',
        },
    };

    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://link-net360.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://link-net360.com/services/',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'About Us',
                item: 'https://link-net360.com/about/',
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: 'Contact Us',
                item: 'https://link-net360.com/contact/',
            },
        ],
    };

    const localBusinessData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://link-net360.com/#localbusiness',
        name: 'Link Net360 Technologies — FZCO',
        image: 'https://link-net360.com/og-image.png',
        url: 'https://link-net360.com',
        telephone: '+971-00-000-0000',
        email: 'info@linknet360.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'United Arab Emirates',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessData),
                }}
            />
        </>
    );
}
