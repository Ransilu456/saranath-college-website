# Saranath College Official Website

[![Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A premium, modern, and high-performance digital presence for **Saranath College**, celebrating a century of academic excellence (1924–2024). This platform is designed to bridge the gap between tradition and technology, offering an immersive experience for students, parents, and alumni.

---

## ✨ Key Features

### 🏛️ Immersive Storytelling
- **Legacy Timeline**: A visual "Journey Through Time" highlighting key milestones from 1924 to the present.
- **Premium Hero Sections**: Parallax effects and cinematic imagery across the About and Home pages.

### 📰 Dynamic Content Engine
- **News & Events**: A full-featured publishing system with category filtering and search.
- **Academic Streams**: Detailed pathways for Science, Commerce, Arts, and Technology.
- **Clubs & Societies**: Comprehensive directory of 40+ student organizations.

### 🖼️ Visual Excellence
- **Masonry Gallery**: A fluid, interactive school gallery with category filtering and a custom high-performance lightbox.
- **Responsive Design**: Meticulously crafted for mobile, tablet, and desktop using a "Mobile-First" approach.

### 🔍 Advanced SEO & Performance
- **Dynamic Metadata**: Customized SEO tags for every news item, event, and club using `generateMetadata`.
- **Hybrid Architecture**: Strategic use of Server Components for SEO and Client Components for rich interactivity.
- **Optimized Assets**: Next.js image optimization and Lucide-React icons for lightning-fast loads.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Vanilla CSS Logic)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
- **Animations**: Tailwind transitions and keyframe animations

---

## 🏗️ Architecture

The project follows a modern **Server-First** approach:
- **`app/`**: Contains the page routes. Listing and detail pages are Server Components to ensure zero-JS initial payload and perfect SEO.
- **`components/`**: Modularized UI elements. Client-side interactivity (filters, lightboxes) is encapsulated in specific `.client.tsx` or similar sub-components.
- **`data/`**: Centralized, typed TypeScript files for easy content updates without code changes.

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📜 Metadata & SEO
The site uses a global metadata template in `layout.tsx`. To update SEO for a specific page, use the `metadata` export. For dynamic pages, refer to the `generateMetadata` implementation in the respective `[id]/page.tsx` files.

---

© 2024 Saranath College Media Unit. All Rights Reserved.
