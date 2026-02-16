import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "IT Services & Solutions | Network, Security, Cloud & VoIP",
    description: "Explore our 16 specialized IT service categories including Server Management, Network Infrastructure, Cybersecurity, VoIP, Cloud Solutions, and Managed IT Support in Dubai, UAE.",
    alternates: {
        canonical: 'https://link-net360.com/services/',
    },
    openGraph: {
        title: "IT Services & Solutions | Link Net360 Technologies",
        description: "16 specialized IT service categories: Server Management, Network Infrastructure, Cybersecurity, VoIP, Cloud Solutions, and Managed IT Support.",
        url: 'https://link-net360.com/services/',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Link Net360 IT Services' }],
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
