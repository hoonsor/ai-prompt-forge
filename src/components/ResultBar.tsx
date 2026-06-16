import { usePromptStore } from '../store/usePromptStore';
import { categories } from '../data/categories';
import { Copy, Trash2, CheckCircle2 } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ResultBar() {
  const { corePrompt, selectedOptions, resetAll } = usePromptStore();
  const [copied, setCopied] = useState(false);

  // 組合提示詞邏輯
  const finalPrompt = useMemo(() => {
    const parts: string[] = [];
    if (corePrompt.trim()) {
      parts.push(corePrompt.trim());
    }

    // 依據 category 順序加入 prompt (確保 subject 在前，quality 在後)
    categories.forEach(category => {
      const categoryPrompts = category.options
        .filter(opt => selectedOptions.has(opt.id))
        .map(opt => opt.prompt);
      
      if (categoryPrompts.length > 0) {
        parts.push(categoryPrompts.join(', '));
      }
    });

    return parts.join(', ');
  }, [corePrompt, selectedOptions]);

  const handleCopy = () => {
    if (!finalPrompt) return;
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!corePrompt && selectedOptions.size === 0) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50"
      >
        <div className="glass rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-2xl shadow-blue-900/20 border-blue-500/30">
          <div className="flex-1 w-full bg-[#0f172a]/80 rounded-xl p-3 max-h-24 overflow-y-auto custom-scrollbar border border-white/5">
            <p className="text-sm text-slate-300 font-mono leading-relaxed">
              {finalPrompt || '請輸入核心內容或選擇風格...'}
            </p>
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
            <button
              onClick={resetAll}
              className="p-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors flex items-center justify-center"
              title="清除全部"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              onClick={handleCopy}
              disabled={!finalPrompt}
              className="flex-1 md:w-40 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white py-3 px-6 rounded-xl transition-all font-medium"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>已複製</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>複製提示詞</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
