"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectData = [
    {
        id: 1,
        title: "www.derekmeduri.com",
        description: "Updated professional portfolio using Nextjs and React components ",
        image: "/images/projects/1.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/react-portfolio-2.0",
        previewUrl: "https://derekmeduri.com"

    },
    {
        id: 2,
        title: "Vite Portfolio Site",
        description: "Professional portfolio created as final project using vitejs and react components ",
        image: "/images/projects/2.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/react-portfolio",
        previewUrl: "https://derekmeduriportfolio.netlify.app/"

    },
    {
        id: 3,
        title: "Profile Energy",
        description: "WIP web application for private client",
        image: "/images/projects/3.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/profileenergy",
        previewUrl: "https://profileenergy.vercel.app/"

    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Application built to show 5 day forecasts. Built with HTML5, CSS, and Javascript",
        image: "/images/projects/4.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/weather-forecast",
        previewUrl: "https://derekmeduri.github.io/weather-forecast/"
    },
    {
        id: 5,
        title: "Workday Planner App",
        description: "Application to manage your workday. Built with HTML5, CSS and Javascript",
        image: "/images/projects/5.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/workday-planner",
        previewUrl: "https://derekmeduri.github.io/workday-planner/"

    },
    {
        id: 6,
        title: "Note Taker App",
        description: "Application to take notes or make todo lists. Built with HTML5, CSS, Javascript, Expressjs",
        image: "/images/projects/6.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/note-taker",
        previewUrl: "https://meduri-note-taker-86eae7654fa3.herokuapp.com/"

    },
    {
        id: 7,
        title: "Password Generator",
        description: "Simple web application built to randomly generate passwords. Built with HTML5, CSS and Javascript",
        image: "/images/projects/7.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/password-generator",
        previewUrl: "https://derekmeduri.github.io/password-generator/"

    },
    {
        id: 8,
        title: "Nebulas Fables",
        description: "Interactive learning tool. Built with Handlebars, Javascript and NASA API",
        image: "/images/projects/8.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/nebulas-fables",
        previewUrl: "/"

    },
    {
        id: 9,
        title: "Squabble Sesh",
        description: "Social Media Application. Built with Vitejs, Javascript, Express, Apollo and MongoDB",
        image: "/images/projects/9.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/Squabble-Sesh",
        previewUrl: "/"

    }

];

const ProjectSection = () => {
    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section id="projects"> 
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Examples of my Work
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === 'All'} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Solo" 
            isSelected={tag === 'Solo'} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Bootcamp" 
            isSelected={tag === 'Bootcamp'} 
            />
               
            </div>
             <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project => 
            <ProjectCard 
            key={project.id} title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project.tags} 
            gitUrl={project.gitUrl} 
            previewUrl={project.previewUrl} />
            ))}
            </div>
        </section>
    )
}

export default ProjectSection;