import { usePromptStore } from '../store/usePromptStore';
import type { PromptOption } from '../data/categories';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface StyleCardProps {
  option: PromptOption;
}

export function StyleCard({ option }: StyleCardProps) {
  const { selectedOptions, toggleOption } = usePromptStore();
  const isSelected = selectedOptions.has(option.id);

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => toggleOption(option.id)}
      className={clsx(
        "relative w-full text-left rounded-xl overflow-hidden group transition-all duration-300",
        "border border-white/10 hover:border-white/30",
        isSelected ? "ring-2 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "shadow-lg"
      )}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative">
        <img
          src={option.imageUrl}
          alt={option.label}
          className={clsx(
            "w-full h-full object-cover transition-transform duration-700",
            "group-hover:scale-110",
            isSelected ? "opacity-100" : "opacity-80 group-hover:opacity-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
        
        {isSelected && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-1 shadow-lg">
            <Check className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-medium text-sm md:text-base drop-shadow-md">
          {option.label}
        </h3>
        <p className="text-slate-300 text-xs truncate mt-1 opacity-70">
          {option.prompt}
        </p>
      </div>
    </motion.button>
  );
}
