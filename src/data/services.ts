// src/data/services.ts

export interface Service {
    title: string;
    description: string;
    icon: string;
    features: string[];
    gradientClass: string;
    iconColor: string;
}

export const services: Service[] = [
    {
        title: 'Content Creation',
        description: 'Eye-catching graphics, engaging captions, and scroll-stopping content that resonates with your audience.',
        icon: 'solar:pen-new-square-linear',
        iconColor: '#6B46C1',
        gradientClass: 'from-primary-purple/10 to-primary-blue/10',
        features: [
            'Custom graphics & templates',
            'Copywriting & captions',
            'Reels & video content',
        ],
    },
    {
        title: 'Content Scheduling',
        description: 'Strategic planning and scheduling to ensure consistent posting at optimal times for maximum reach.',
        icon: 'solar:calendar-linear',
        iconColor: '#38BDF8',
        gradientClass: 'from-primary-blue/10 to-primary-purple/10',
        features: [
            'Content calendar planning',
            'Optimal timing analysis',
            'Multi-platform scheduling',
        ],
    },
    {
        title: 'Community Management',
        description: 'Building authentic relationships with your audience through meaningful engagement and interaction.',
        icon: 'solar:users-group-rounded-linear',
        iconColor: '#6B46C1',
        gradientClass: 'from-primary-purple/10 to-primary-blue/10',
        features: [
            'Comment & DM responses',
            'Engagement strategies',
            'Follower growth tactics',
        ],
    },
    {
        title: 'Analytics & Reporting',
        description: 'Data-driven insights and detailed reports to track performance and optimize your strategy.',
        icon: 'solar:graph-new-up-linear',
        iconColor: '#38BDF8',
        gradientClass: 'from-primary-blue/10 to-primary-purple/10',
        features: [
            'Monthly performance reports',
            'Competitor analysis',
            'Growth recommendations',
        ],
    },
    {
        title: 'Strategy Development',
        description: 'Custom social media strategies aligned with your business goals and target audience.',
        icon: 'solar:lightbulb-linear',
        iconColor: '#6B46C1',
        gradientClass: 'from-primary-purple/10 to-primary-blue/10',
        features: [
            'Brand voice development',
            'Audience research',
            'Content pillars & themes',
        ],
    },
    {
        title: 'Paid Ads Support',
        description: 'Assistance with paid advertising campaigns to boost reach and drive conversions.',
        icon: 'solar:target-linear',
        iconColor: '#38BDF8',
        gradientClass: 'from-primary-blue/10 to-primary-purple/10',
        features: [
            'Ad creative design',
            'Campaign setup assistance',
            'Performance tracking',
        ],
    },
];
