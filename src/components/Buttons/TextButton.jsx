import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TextButton = ({ variant = "primary", state = "default", iconPosition = "none", children }) => {
    const variantStyles = {
        primary: {
            default: 'text-blue-600',
            defaultb: 'font-bold text-blue-600',
            hover: 'text-blue-700',
            active: 'text-blue-800',
            disabled: 'text-gray-500 cursor-not-allowed',
        },
        secondary: {
            default: 'text-blue-500',
            hover: 'text-blue-600',
            active: 'text-blue-700',
            disabled: 'text-gray-500 cursor-not-allowed',
        },
        tertiary: {
            default: 'text-orange-400',
            hover: 'text-orange-500',
            active: 'text-orange-600',
            disabled: 'text-gray-500 cursor-not-allowed',
        },
    };

    const currentStyles = variantStyles[variant]?.[state] || '';

    return (
        <button className={`flex items-center gap-2 ${currentStyles}`} disabled={state === 'disabled'}>
            {iconPosition === 'left' && <IoIosArrowBack />}
            {children}
            {iconPosition === 'right' && <IoIosArrowForward />}
        </button>
    );
};

export default TextButton;
