"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectData = [
    {
        id: 1,
        title: "www.derekmeduri.com",
        description: "Updated professional portfolio you are currently viewing. Built with Nextjs and React components.",
        image: "/images/projects/1.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/react-portfolio-2.0",
        previewUrl: "https://derekmeduri.com"

    },
    {
        id: 2,
        title: "Vite Portfolio Site",
        description: "Professional portfolio created as final project for The Ohio State University College of Engineering Certificate Program. Built with ViteJs and React components",
        image: "/images/projects/2.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/react-portfolio",
        previewUrl: "https://derekmeduriportfolio.netlify.app/"

    },
    {
        id: 3,
        title: "Profile Energy",
        description: "WIP web application for private clien. Built with ViteJs, React components and Javascript",
        image: "/images/projects/3.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/profileenergy",
        previewUrl: "https://profileenergy.vercel.app/"

    },
    {
        id: 4,
        title: "614 Dim Sum",
        description: "WIP mobile ordering application for fictional restaurant. Built with NextJs, React components and Javascript",
        image: "/images/projects/4.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/614-dim-sum",
        previewUrl: "https://614-dim-sum.vercel.app/"
    },
    {
        id: 5,
        title: "Weather Forecast App",
        description: "Web application to search for 5 day forecasts. Built with HTML5, CSS, and Javascript. Utilizes local storage for search history.",
        image: "/images/projects/5.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/weather-forecast",
        previewUrl: "https://derekmeduri.github.io/weather-forecast/"
    },
    {
        id: 6,
        title: "Workday Planner App",
        description: "Web application to manage your workday. Built with HTML5, CSS and Javascript",
        image: "/images/projects/6.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/workday-planner",
        previewUrl: "https://derekmeduri.github.io/workday-planner/"

    },
    {
        id: 7,
        title: "Note Taker App",
        description: "Web application to take notes or make todo lists. Built with HTML5, CSS, Javascript, Expressjs",
        image: "/images/projects/7.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/note-taker",
        previewUrl: "https://meduri-note-taker-86eae7654fa3.herokuapp.com/"

    },
    {
        id: 8,
        title: "Password Generator",
        description: "Web application built to randomly generate passwords. Built with HTML5, CSS and Javascript",
        image: "/images/projects/8.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/password-generator",
        previewUrl: "https://derekmeduri.github.io/password-generator/"

    },
    {
        id: 9,
        title: "Nebulas Fables",
        description: "Interactive learning tool. Built with HandlebarsJs, Javascript and NASA's Free Image API",
        image: "/images/projects/9.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "https://github.com/derekmeduri/nebulas-fables",
        previewUrl: "/"

    },
    {
        id: 10,
        title: "Squabble Sesh",
        description: "Social Media web application. Built with Vitejs, Javascript, Express, Apollo and MongoDB",
        image: "/images/projects/10.png",
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