"use client";

import { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function SearchBar({ className = "", ...props }: SearchBarProps) {
    return (
        <div className="relative w-full max-w-sm">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-default-700/50">
                <Search className="h-4 w-4" />
            </div>
            <input
                type="search"
                placeholder="Search..."
                className={`input-base pl-9 ${className}`}
                {...props}
            />
        </div>
    );
}
