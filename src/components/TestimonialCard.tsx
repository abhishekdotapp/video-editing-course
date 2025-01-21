"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const videoEditingSchoolTestimonials = [
    {
        quote:
            'Joining the video editing school transformed my skills and gave me the confidence to bring my creative ideas to life. The instructors are exceptional!',
        name: 'Alex Johnson',
        title: 'Beginner Editor',
    },
    {
        quote:
            "The supportive community here is incredible. I've grown not just as an editor but also as a storyteller, thanks to their comprehensive courses.",
        name: 'Samantha Lee',
        title: 'Aspiring Filmmaker',
    },
    {
        quote:
            "This school gave me the tools and confidence to tackle complex projects. I'm endlessly grateful for the personalized feedback and expert coaching.",
        name: 'Michael Chen',
        title: 'Freelance Editor',
    },
    {
        quote:
            'As a content creator, finding the right mentor can be tough, but this school matched me with an instructor who truly understood my vision.',
        name: 'Emily Taylor',
        title: 'YouTube Creator',
    },
    {
        quote:
            'The advanced courses here opened my eyes to the possibilities of professional editing. Highly recommend for anyone looking to elevate their skills!',
        name: 'Chris Morales',
        title: 'Video Production Specialist',
    },
];
                                                                                                                  

function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={videoEditingSchoolTestimonials}
                        direction="right"
                        speed="normal"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards