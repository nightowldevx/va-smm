// src/data/tools.ts

export interface Platform {
    name: string;
    icon: string;
    gradient?: string;
    bgColor?: string;
}

export interface Tool {
    name: string;
    icon: string;
    bgColor: string;
}

export const platforms: Platform[] = [
    {
        name: 'Instagram',
        icon: 'mdi:instagram',
        gradient: 'linear-gradient(135deg, #E1306C 0%, #F77737 100%)',
    },
    {
        name: 'Facebook',
        icon: 'mdi:facebook',
        bgColor: '#1877F2',
    },
    {
        name: 'TikTok',
        icon: 'ic:baseline-tiktok',
        bgColor: '#000000',
    },
    {
        name: 'LinkedIn',
        icon: 'mdi:linkedin',
        bgColor: '#0A66C2',
    },
    {
        name: 'Pinterest',
        icon: 'mdi:pinterest',
        bgColor: '#E60023',
    },
];

export const tools: Tool[] = [
    {
        name: 'Canva',
        icon: 'simple-icons:canva',
        bgColor: '#00C4CC',
    },
    {
        name: 'Hootsuite',
        icon: 'simple-icons:hootsuite',
        bgColor: '#FF4A00',
    },
    {
        name: 'Buffer',
        icon: 'simple-icons:buffer',
        bgColor: '#2C4BFF',
    },
    {
        name: 'Later',
        icon: 'solar:calendar-mark-linear',
        bgColor: '#E8598B',
    },
    {
        name: 'Figma',
        icon: 'simple-icons:figma',
        bgColor: '#F24E1E',
    },
    {
        name: 'Asana',
        icon: 'simple-icons:asana',
        bgColor: '#F06A6A',
    },
];
