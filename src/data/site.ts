// src/data/site.ts

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    icon: string;
    url: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface SiteData {
    name: string;
    title: string;
    description: string;
    tagline: string;
    email: string;
    navigation: NavLink[];
    socialLinks: SocialLink[];
    heroStats: Stat[];
    availabilityText: string;
    bookingUrl: string;
}

export const siteData: SiteData = {
    name: 'Knix Dev',
    title: 'Knix Dev | Social Media Marketing VA',
    bookingUrl: 'https://calendly.com/',
    description: 'Social Media Marketing Virtual Assistant helping brands grow their online presence through strategic content creation, community engagement, and data-driven social media management.',
    tagline: 'Social Media Marketing Virtual Assistant',
    email: 'hello@sarahmitchell.com',
    availabilityText: 'Available for New Projects',

    navigation: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Tools', href: '#tools' },
        { label: 'Portfolio', href: '#portfolio' },
    ],

    socialLinks: [
        { platform: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/' },
        { platform: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/' },
        { platform: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/' },
    ],

    heroStats: [
        { value: '50+', label: 'Happy Clients' },
        { value: '3+', label: 'Years Experience' },
        { value: '200%', label: 'Avg. Growth' },
    ],
};
