"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TypeScript Interfaces ---
interface MasonryItem {
  id: number;
  imageUrl: string;
  title: string;
}

interface GridItemProps {
  item: MasonryItem;
}

interface MasonryGridProps {
  items: MasonryItem[];
}

// --- Simplified mock data (no author info) ---
const initialItems = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    title: "Misty Mountain Valley",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
    title: "Lakeside Cabin",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop",
    title: "Sunlight Through Forest",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    title: "Dramatic Mountain Peak",
  },
];

// --- GridItem Component ---
const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-4 break-inside-avoid relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}>
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-auto rounded-xl shadow-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/400x300/fecaca/333333?text=Image+Not+Found`;
        }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex justify-start gap-3"></div>
              <p className="text-white font-bold text-base truncate">
                {item.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MasonryGrid Component ---
const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
  return (
    <div
      className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
      style={{ columnWidth: "280px" }}>
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function GallerySection() {
  return (
    <div className="font-sans transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <main>
          <MasonryGrid items={initialItems} />
        </main>
      </div>
    </div>
  );
}
