"use client"
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
    {
        id: 1,
        name: 'Elena Briggs',
        designation: 'Visual Effect Artist',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: 'Marcus Reid',
        designation: 'Graphic Designer',
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
        id: 3,
        name: 'Julia Zhang',
        designation: '3D Artist',
        image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: 'Daniel Johnson',
        designation: 'Animation Artist',
        image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
];

function Instructors() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructor</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professional who will guide your editing journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    )
}

export default Instructors