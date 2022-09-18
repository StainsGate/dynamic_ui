import React from "react";

interface ButtonProps {
    name:String;
}


export const Button = ({name}:ButtonProps) => {

    return (
        <button className="dynamic_button">{name}</button>
    )
}