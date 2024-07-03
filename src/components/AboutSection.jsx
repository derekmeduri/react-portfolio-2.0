"use client";
import { useState, useTransition } from "react";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>The Ohio State University, College of Engineering Full Stack Web Development Certificate Program</li>
                <li>Kent State Univeristy, Bachelor's of Sceince in Fashion Merchandising</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Full Stack Web Development MERN Tech Stack</li>
                <li>Learn HTML Codecademy</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] =useState("skills");
    const [isPending, startTansition] = useTransition();

    const handleTabChange = (id) => {
        startTansition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                priority={true} 
                src="/images/derekmeduripicture.jpg" 
                alt="derek meduri with dogs" 
                width={500} 
                height={500}/>
                <div className="mt-2 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-sm">As an enthusiastic and forward-thinking software developer, I provide a mix of creativity, innovation, and dedication with extensive leadership, communication, and organizational capabilities. I am seeking an entry level position in software development to apply and refine my technical skills. Eager to contribute with my critical and analytical thinking within a collaborative team environment that values mentorships, fosters growth and encourages continual individual development. </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {""}Skills{""} </TabButton>

                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {""}Education{""} </TabButton>
                        
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {""}Certifications{""} </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
            </section>
    )
}


export default AboutSection;