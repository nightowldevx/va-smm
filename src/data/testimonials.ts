// src/data/testimonials.ts

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Amanda Chen',
        role: 'CEO',
        company: 'StyleHub',
        text: 'Sarah completely transformed our social media presence. Her content is engaging, on-brand, and consistently drives results. She\'s an invaluable part of our team.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        name: 'Michael Torres',
        role: 'Marketing Director',
        company: 'TechFlow',
        text: 'Working with Sarah has been a game-changer. She understands our brand voice perfectly and delivers content that resonates with our audience every time.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
    {
        name: 'Sarah Williams',
        role: 'Founder',
        company: 'Bloom Boutique',
        text: 'Professional, creative, and incredibly organized. Sarah helped us grow our Instagram following by 200% in just 3 months. Highly recommend!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 5,
    },
];
