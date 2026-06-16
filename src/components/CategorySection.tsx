import type { Category } from '../data/categories';
import { StyleCard } from './StyleCard';
import { motion } from 'framer-motion';

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
          {category.title}
        </h2>
        <p className="text-slate-400 mt-2 pl-5 text-sm">{category.description}</p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
      >
        {category.options.map((option) => (
          <StyleCard key={option.id} option={option} />
        ))}
      </motion.div>
    </div>
  );
}
