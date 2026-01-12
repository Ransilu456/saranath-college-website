"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems } from "@/data/gallery";
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

export default function SchoolGallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];

    // Filter items
    const filteredItems = galleryItems.filter(item =>
        activeCategory === "All" || item.category === activeCategory
    );

    // Navigation Handlers
    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) =>
            prev === null ? null : (prev + 1) % filteredItems.length
        );
    }, [selectedImageIndex, filteredItems.length]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) =>
            prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
    }, [selectedImageIndex, filteredItems.length]);

    // Keyboard Support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (activeCategory === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        if (selectedImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, handleNext, handlePrev, activeCategory]);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="gallery">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block mb-3">
                            Campus Life
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                            Life at Saranath
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            A glimpse into the vibrant atmosphere, academic pursuits, and spirited moments that define our college experience.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => { setActiveCategory(category); setSelectedImageIndex(null); }}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === category
                                        ? "bg-slate-900 text-white shadow-lg scale-105"
                                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-6">
                    {filteredItems.map((item, index) => {
                        // Determine span classes based on size
                        let spanClass = "";
                        if (item.size === "large") spanClass = "md:col-span-2 md:row-span-2";
                        else if (item.size === "wide") spanClass = "md:col-span-2 md:row-span-1";
                        else if (item.size === "tall") spanClass = "md:col-span-1 md:row-span-2";
                        else spanClass = "md:col-span-1 md:row-span-1";

                        return (
                            <div
                                key={item.id}
                                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${spanClass}`}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-2">{item.category}</span>
                                    <p className="text-white font-serif font-semibold text-xl leading-tight">{item.caption}</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20 translate-y-2 group-hover:translate-y-0 text-white hover:bg-white hover:text-slate-900">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedImageIndex(null)}>

                    {/* Controls */}
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-40 hidden md:block" // Hidden on mobile, can use swipe in future
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-40 hidden md:block"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Image Container */}
                    <div className="relative max-w-7xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={filteredItems[selectedImageIndex].image}
                            alt={filteredItems[selectedImageIndex].caption}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mb-6"
                        />
                        <div className="text-center">
                            <h3 className="text-2xl font-serif text-white font-medium mb-2">
                                {filteredItems[selectedImageIndex].caption}
                            </h3>
                            <p className="text-white/60 text-sm uppercase tracking-widest font-bold">
                                {selectedImageIndex + 1} / {filteredItems.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
