import React from 'react';

const Button = ({ text, icon, iconPosition, state, variant }) => {
    const baseStyles = 'flex items-center justify-center gap-2 rounded-full px-4 py-2 font-medium';

    const stateStyles = {
        default: '',
        hover: '',
        active: '',
        disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    };

    const variantStyles = {
        primary: {
            default: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
            disabled: 'bg-gray-300 text-gray-500',
            defaultWf: 'w-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
        },
        secondary: {
            default: 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50 active:bg-blue-100',
            disabled: 'bg-gray-100 text-gray-300 border-2 border-gray-200',
        },
        tertiary: {
            default: 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
            disabled: 'bg-gray-300 text-gray-500',
        },
        outlineBlue: {
            default: 'border border-blue-600 text-blue-600 bg-white',
            hover: 'bg-blue-600 text-white',
            active: 'bg-blue-700 text-white',
            disabled: 'border border-gray-300 text-gray-500 bg-white cursor-not-allowed',
        },
        outlineWhite: {
            default: 'border border-white text-white bg-blue-600',
            hover: 'bg-blue-700 text-white',
            active: 'bg-blue-800 text-white',
            disabled: 'border border-gray-300 text-gray-500 bg-blue-600 cursor-not-allowed',
        },
    };

    const currentVariantStyles = variantStyles[variant]?.[state] || variantStyles['primary'][state] || '';
    const currentStateStyles = stateStyles[state] || '';

    return (
        <button className={`${baseStyles} ${currentVariantStyles} ${currentStateStyles}`} disabled={state === 'disabled'}>
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    );
};

export default Button;
