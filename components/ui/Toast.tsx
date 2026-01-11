"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string, type: ToastType = "info") => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto dismiss after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`
              pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-md shadow-lg border w-80 
              transform transition-all duration-300 ease-in-out animate-in slide-in-from-right-10 fade-in
              ${toast.type === "success"
                                ? "bg-white border-green-200 text-green-800"
                                : toast.type === "error"
                                    ? "bg-white border-red-200 text-red-800"
                                    : toast.type === "warning"
                                        ? "bg-white border-yellow-200 text-yellow-800"
                                        : "bg-white border-gray-200 text-gray-800"
                            }
            `}
                    >
                        <div className="shrink-0">
                            {toast.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                            {toast.type === "error" && <AlertCircle className="h-5 w-5 text-red-500" />}
                            {toast.type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                            {toast.type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                        </div>
                        <p className="text-sm font-medium flex-1">{toast.message}</p>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="opacity-50 hover:opacity-100 transition-opacity"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export default function Toast() {
    return null; // This component is now a provider-based system
}
