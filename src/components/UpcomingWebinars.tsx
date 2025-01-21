"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
    {
        title: 'Understanding Video Editing Basics',
        description:
            'Dive deep into the fundamentals of video editing and learn to create impactful content.',
        slug: 'understanding-video-editing-basics',
        isFeatured: true,
    },
    {
        title: 'The Art of Storytelling in Editing',
        description:
            'Discover how to craft compelling stories through the power of video editing.',
        slug: 'the-art-of-storytelling-in-editing',
        isFeatured: true,
    },
    {
        title: 'Mastering Advanced Editing Techniques',
        description:
            'Learn advanced editing techniques to elevate your projects to professional standards.',
        slug: 'mastering-advanced-editing-techniques',
        isFeatured: true,
    },
    {
        title: 'Video Production Essentials',
        description:
            'Get started with video production by understanding the key stages of the process.',
        slug: 'video-production-essentials',
        isFeatured: true,
    },
    {
        title: 'Enhancing Visual Effects',
        description:
            'Learn to create stunning visual effects using industry-standard tools and software.',
        slug: 'enhancing-visual-effects',
        isFeatured: true,
    },
    {
        title: 'Digital Content Marketing',
        description:
            'Discover strategies to promote your video content effectively in the digital space.',
        slug: 'digital-content-marketing',
        isFeatured: true,
    },
];

function UpcomingWebinars() {
    return (
        <div className="p-12 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Editing Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: '/'
                            }
                        ))}
                    />
                </div>
                <div className="met-10 text-center">
                    <Link href={"/"}
                        className="px-4 py-2 rounded border border-neutral-600 text-slate-400 bg-slate-900 hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars