"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "secondary-light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    let variantClasses = "";

    switch (variant) {
        case "secondary":
            variantClasses = "bg-default-300 text-default-700";
            break;

        case "outline":
            variantClasses =
                "bg-transparent border border-default-700 text-default-700";
            break;

        case "ghost":
            variantClasses = "bg-transparent text-default-700";
            break;

        case "secondary-light":
            variantClasses = "px-4 py-1 font-medium"; 
            break;

        default:
            variantClasses = "bg-primary text-primary-foreground";
    }

    return (
        <button {...props} data-variant={variant} className={` btn-sweep inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wide  transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer ${variantClasses} ${className} `}>
            <span>{children}</span>
        </button>
    );
}
