"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectData = [
    {
        id: 1,
        title: "React Portfolio Update",
        description: "Updated professional portfolio",
        image: "/images/projects/1.png",
        tag: ["All", "Solo"],
        gitUrl: "https://github.com/derekmeduri/react-portfolio",
        previewUrl: "https://derekmeduri.com"

    },
    {
        id: 2,
        title: "Project 2 Title",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 3,
        title: "Project 3 Title",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Project 4 Title",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["All", "Solo"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 5,
        title: "Project 5 Title",
        description: "Project 5 description",
        image: "/images/projects/5.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 6,
        title: "Project 6 Title",
        description: "Project 6 description",
        image: "/images/projects/6.png",
        tag: ["All", "Solo"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 7,
        title: "Project 7 Title",
        description: "Project 7 description",
        image: "/images/projects/7.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "/",
        previewUrl: "/"

    },
    {
        id: 8,
        title: "Project 8 Title",
        description: "Project 8 description",
        image: "/images/projects/8.png",
        tag: ["All", "Bootcamp"],
        gitUrl: "/",
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