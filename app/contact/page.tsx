import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact Us — Get IT Support in Dubai | Link Net360 Technologies",
    description: "Get in touch with Link Net360 Technologies for expert IT support, network infrastructure, and managed services in Dubai, UAE. Call, email, or visit our office for a free consultation.",
    alternates: {
        canonical: 'https://link-net360.com/contact/',
    },
    openGraph: {
        title: "Contact Link Net360 Technologies — IT Support Dubai",
        description: "Reach out for expert IT support and solutions. Free consultation available.",
        url: 'https://link-net360.com/contact/',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Link Net360 Technologies' }],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
