import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles =isSelected
    ? "text-white border-teal-700 hover:text-teal-700"
    : "text-white border-white hover:text-teal-700"
    return (
        <button 
        className={` ${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;