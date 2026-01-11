"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "slate" | "amber";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

        const variants = {
            primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
            secondary: "bg-amber-600 text-white hover:bg-amber-500 shadow-sm",
            slate: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
            amber: "bg-amber-600 text-white hover:bg-amber-500 shadow-sm",
            outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",
            ghost: "hover:bg-slate-100 hover:text-slate-900",
            destructive: "bg-red-600 text-white hover:bg-red-700",
        };

        const sizes = {
            sm: "h-9 px-3",
            md: "h-10 py-2 px-4",
            lg: "h-11 px-8 text-base",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export default Button;
