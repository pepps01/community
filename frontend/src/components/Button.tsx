import React from 'react'

const Button: React.FC<{ type: "button" | "submit"; title: string }> = ({ type, title }) => {
    return (
        <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full my-2 cursor-pointer">
            {title}
        </button>
    )
}

export default Button