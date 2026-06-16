# 產圖風格選擇網站 (AI Prompt Forge)

> 這是一個基於 React 19 與 Vite 打造的高效能 AI 產圖風格輔助與提示詞生成系統，具備玻璃擬物化設計與流暢的微動畫體驗。

## 📖 專案簡介 (Overview)
AI Prompt Forge 是一款專為 AI 繪圖玩家與創作者設計的專業提示詞輔助工具。我們解決了使用者在撰寫 Midjourney 或 Stable Diffusion 提示詞時，常常不知道該如何精準描述「風格」、「視角」、「光影」或「品質」的痛點。透過將複雜的提示詞公式拆解為多個視覺化選項，使用者可以直觀地選擇自己想要的畫面氛圍。

本工具不僅提供了超過 30 種專業的攝影與藝術風格選項，每個選項更配有對應的示意圖。使用者只要輸入核心內容，並動動滑鼠勾選想要的屬性，系統就會即時在下方組合出最佳的咒語 (Prompt)，幫助您毫不費力地生成理想的圖片。

## ✨ 核心功能 (Key Features)
- **視覺化風格庫**：涵蓋六大分類（主題、風格、視角、光影、色彩、品質），選項配有精美範例圖片，所見即所得。
- **即時提示詞生成**：採用 Zustand 狀態管理，根據勾選的項目自動組裝並格式化專業提示詞，順序符合 AI 繪圖引擎的最佳實踐。
- **沉浸式極致 UI**：搭載 Tailwind CSS v4 與 Framer Motion，實現玻璃擬物化 (Glassmorphism) 深色模式設計與懸浮微動畫。
- **一鍵複製與清除**：位於畫面底部的懸浮工具列，讓使用者能快速複製咒語並前往 AI 產圖工具中貼上使用。

## 🛠 技術棧 (Tech Stack)
- **前端 / UI**：React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React
- **狀態管理**：Zustand
- **建置工具**：Vite

## 🚀 快速開始 (Quick Start)

### 環境要求
- Node.js >= 18

### 安裝與運行
```bash
# 1. 複製專案 (如已有遠端倉庫)
# git clone <repository-url>

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
```

## 📁 專案結構 (Project Structure)
```text
src/
 ├── components/    # 共通 UI 元件 (Header, PromptInput, StyleCard 等)
 ├── data/          # 靜態資料結構 (categories.ts，存放風格與提示詞)
 ├── store/         # Zustand 狀態管理 (usePromptStore.ts)
 ├── App.tsx        # 主應用程式進入點
 └── index.css      # 全域樣式與 Tailwind v4 配置
```

## 🔄 最新更新 (Recent Updates)
- v1.0.0 (2026-06-16)：初始專案建立，完成全套 UI 與提示詞生成邏輯，並加入 30+ 款範例風格圖片。

---
*Generated and maintained by Google Antigravity Architect*
