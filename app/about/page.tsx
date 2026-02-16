import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Us — Dubai IT Solutions Provider | Link Net360 Technologies",
    description: "Learn about Link Net360 Technologies, a leading IT solutions and infrastructure provider in Dubai, UAE. Discover our mission, vision, certified team of experts, and 10+ years of enterprise IT experience.",
    alternates: {
        canonical: 'https://link-net360.com/about/',
    },
    openGraph: {
        title: "About Link Net360 Technologies — IT Experts in Dubai",
        description: "10+ years empowering businesses with reliable, scalable, and secure technology infrastructure in the UAE.",
        url: 'https://link-net360.com/about/',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Link Net360 Technologies' }],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
