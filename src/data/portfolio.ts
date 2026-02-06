// src/data/portfolio.ts

export interface PortfolioMetric {
    value: string;
    label: string;
    color: string;
}

export interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    platform: string;
    platformColor: string;
    metrics: PortfolioMetric[];
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: 'E-commerce Brand Feed',
        description: 'Complete Instagram feed redesign and content strategy for a fashion e-commerce brand.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
        platform: 'Instagram',
        platformColor: '#6B46C1',
        metrics: [
            { value: '+156%', label: 'Engagement', color: '#6B46C1' },
            { value: '+12K', label: 'Followers', color: '#38BDF8' },
        ],
    },
    {
        title: 'SaaS Brand Launch',
        description: 'Full social media launch strategy for a B2B software company across multiple platforms.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        platform: 'Multi-Platform',
        platformColor: '#38BDF8',
        metrics: [
            { value: '50K', label: 'Impressions', color: '#6B46C1' },
            { value: '+340%', label: 'Website Traffic', color: '#38BDF8' },
        ],
    },
    {
        title: 'Restaurant Chain',
        description: 'Community management and content creation for a local restaurant group with 5 locations.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        platform: 'Facebook',
        platformColor: '#6B46C1',
        metrics: [
            { value: '+89%', label: 'Reviews', color: '#6B46C1' },
            { value: '+25%', label: 'Foot Traffic', color: '#38BDF8' },
        ],
    },
];
