// components/Button.tsx
import React from 'react';
import AnimateComponent from './AnimateComponent';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    children?: React.ReactNode;
    animateOptions?: {
        type: 'left' | 'right' | 'top' | 'bottom';
    }
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className, animateOptions, children }) => {
    const buttonProps = {
        type,
        onClick,
        children: text || children,
        className: `${className ? `${className} ` : ''}inline-block bg-gradient-to-r from-primary to-secondary hover:to-primary text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`
    };

    if (!animateOptions || !animateOptions.type) {
        return (
            <button
                {...buttonProps}
            >
                {text || children}
            </button>
        );
    }

    return (
        <AnimateComponent as="button" {...buttonProps} {...animateOptions} />
    )
};

export default Button;
