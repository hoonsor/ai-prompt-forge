import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { CategorySection } from './components/CategorySection';
import { ResultBar } from './components/ResultBar';
import { categories } from './data/categories';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 relative pb-32">
      {/* Background ambient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
      </div>

      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            打造你的完美提示詞
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            輸入你的核心構想，並從下方精心挑選的各種風格與視角中點選，我們將為你自動組合出最專業的 AI 產圖咒語。
          </p>
        </div>

        <PromptInput />

        <div className="space-y-4">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </main>

      <ResultBar />
    </div>
  );
}

export default App;
