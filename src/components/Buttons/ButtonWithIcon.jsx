import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ButtonWithIcon = ({ variant = "outline", state = "default", shape = "rounded" }) => {
    const variantStyles = {
        outline: {
            default: 'border border-blue-600 text-blue-600',
            hover: 'bg-blue-600 text-white',
            active: 'bg-blue-700 text-white',
            disabled: 'border border-gray-300 text-gray-500 cursor-not-allowed',
        },
        filled: {
            default: 'bg-blue-600 text-white',
            hover: 'bg-blue-700 text-white',
            active: 'bg-blue-800 text-white',
            disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
        },
        outlineRounded: {
            default: 'border border-blue-600 text-blue-600 rounded-full',
            hover: 'bg-blue-600 text-white rounded-full',
            active: 'bg-blue-700 text-white rounded-full',
            disabled: 'border border-gray-300 text-gray-500 rounded-full cursor-not-allowed',
        },
        filledRounded: {
            default: 'bg-blue-600 text-white rounded-full',
            hover: 'bg-blue-700 text-white rounded-full',
            active: 'bg-blue-800 text-white rounded-full',
            disabled: 'bg-gray-300 text-gray-500 rounded-full cursor-not-allowed',
        },
    };

    const currentStyles = variantStyles[variant]?.[state] || '';

    return (
        <button className={`p-2 ${currentStyles}`} disabled={state === 'disabled'}>
            <IoIosArrowForward />
        </button>
    );
};

export default ButtonWithIcon;
