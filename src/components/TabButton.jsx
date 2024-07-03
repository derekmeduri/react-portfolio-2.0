import React from "react";

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-white border-b border-teal-700' : "text-white";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-teal-700 ${buttonClasses}`}>
            {children}
            </p>
        </button>
    )
}

export default TabButton;