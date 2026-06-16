import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b-0 border-x-0 border-t-0 rounded-none px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Sparkles className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            AI Prompt Forge
          </h1>
          <p className="text-xs text-slate-400">專業產圖風格輔助工具</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <span>v1.0</span>
      </div>
    </header>
  );
}
