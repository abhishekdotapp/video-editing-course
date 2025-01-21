"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const videoEditingSchoolContent = [
    {
        title: 'Craft Your Vision with Us: A Personal Journey in Video Editing Mastery',
        description:
            'Embark on a creative journey tailored to your unique style. Our personalized instruction adapts to your individual goals, empowering you to bring your visions to life. At our video editing school, your creativity meets our expertise, paving the way for cinematic excellence.',
    },
    {
        title: 'Live Feedback & Engagement',
        description:
            'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time adjustments in a professional editing suite. This hands-on approach sharpens your skills and helps you master advanced editing techniques.',
    },
    {
        title: 'Cutting-Edge Curriculum',
        description:
            'Our curriculum is continually updated with the latest trends, tools, and technologies in video editing. Stay ahead of the curve with innovative techniques and industry-standard software that keep your skills relevant and competitive.',
    },
    {
        title: 'Limitless Learning Opportunities',
        description:
            'With our vast library of resources and diverse course offerings, there’s always something new to learn. Our platform ensures you stay inspired and continuously improve, from basic editing techniques to advanced visual effects.',
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={videoEditingSchoolContent}/>
        </div>
    )
}

export default WhyChooseUs