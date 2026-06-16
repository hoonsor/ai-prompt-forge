import { usePromptStore } from '../store/usePromptStore';
import { PenLine } from 'lucide-react';

export function PromptInput() {
  const { corePrompt, setCorePrompt } = usePromptStore();

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-16 relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20"></div>
      <div className="relative glass rounded-2xl p-2 flex items-start">
        <div className="p-3 text-blue-400">
          <PenLine className="w-6 h-6" />
        </div>
        <textarea
          value={corePrompt}
          onChange={(e) => setCorePrompt(e.target.value)}
          placeholder="描述你想生成的核心畫面... 例如：一隻在太空站喝咖啡的橘貓"
          className="w-full bg-transparent border-none text-white placeholder-slate-500 text-lg p-3 focus:outline-none resize-none min-h-[100px]"
        />
      </div>
    </div>
  );
}
