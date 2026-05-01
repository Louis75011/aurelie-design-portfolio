import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export default function ProjectCard({ title, category, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-black cursor-pointer"
    >
      <img
        src={image}
        alt={`Projet : ${title}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-70"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-[#611C6F]/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="label-caps !text-cream mb-1">
          {category}
        </p>
        <h3 className="text-xl font-serif italic text-cream leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Editorial border */}
      <div className="absolute inset-0 border border-purple/5 pointer-events-none group-hover:border-purple/20 transition-colors duration-500" />
    </motion.div>
  );
}
