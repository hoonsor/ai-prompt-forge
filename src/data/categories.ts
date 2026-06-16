export type CategoryType = 
  | 'subject' 
  | 'style' 
  | 'lighting' 
  | 'camera' 
  | 'color' 
  | 'quality' 
  | 'vibe';

export interface PromptOption {
  id: string;
  label: string;      // 顯示在畫面上的文字
  prompt: string;     // 實際加到 Prompt 中的字詞
  imageUrl: string;   // 預覽圖路徑
}

export interface Category {
  id: CategoryType;
  title: string;
  description: string;
  options: PromptOption[];
}

export const categories: Category[] = [
  {
    id: 'subject',
    title: '主題 (Subject)',
    description: '核心生成對象的基本特徵',
    options: [
      { id: 'sub_portrait', label: '人像特寫', prompt: 'portrait of a person', imageUrl: '/assets/sub_portrait.webp' },
      { id: 'sub_landscape', label: '廣闊風景', prompt: 'wide landscape, nature', imageUrl: '/assets/sub_landscape.webp' },
      { id: 'sub_architecture', label: '建築設計', prompt: 'architectural design, building', imageUrl: '/assets/sub_architecture.webp' },
      { id: 'sub_animal', label: '動物/生物', prompt: 'wild animal, creature', imageUrl: '/assets/sub_animal.webp' },
      { id: 'sub_mecha', label: '機甲/機器人', prompt: 'mecha, robot, intricate mechanical parts', imageUrl: '/assets/sub_mecha.webp' },
      { id: 'sub_food', label: '美食攝影', prompt: 'food photography, delicious meal', imageUrl: '/assets/sub_food.webp' },
    ]
  },
  {
    id: 'style',
    title: '風格 (Style)',
    description: '整體畫面的藝術風格與媒材',
    options: [
      { id: 'sty_realistic', label: '寫實攝影', prompt: 'photorealistic, realistic photography, RAW photo', imageUrl: '/assets/sty_realistic.webp' },
      { id: 'sty_anime', label: '日本動漫', prompt: 'anime style, 2D illustration, cel shading', imageUrl: '/assets/sty_anime.webp' },
      { id: 'sty_watercolor', label: '水彩畫', prompt: 'watercolor painting, brush strokes, washed colors', imageUrl: '/assets/sty_watercolor.webp' },
      { id: 'sty_oil', label: '經典油畫', prompt: 'oil painting, thick impasto, classic art', imageUrl: '/assets/sty_oil.webp' },
      { id: 'sty_cyberpunk', label: '賽博龐克', prompt: 'cyberpunk style, futuristic, sci-fi', imageUrl: '/assets/sty_cyberpunk.webp' },
      { id: 'sty_ghibli', label: '吉卜力風', prompt: 'Studio Ghibli style, anime movie screenshot', imageUrl: '/assets/sty_ghibli.webp' },
      { id: 'sty_3d', label: '3D 渲染', prompt: '3D render, octane render, unreal engine 5', imageUrl: '/assets/sty_3d.webp' },
      { id: 'sty_pixel', label: '像素藝術', prompt: 'pixel art, 16-bit, retro gaming', imageUrl: '/assets/sty_pixel.webp' },
      { id: 'sty_minimal', label: '極簡線條', prompt: 'minimalist line art, clean lines, flat colors', imageUrl: '/assets/sty_minimal.webp' },
      { id: 'sty_comic', label: '美式漫畫', prompt: 'comic book style, ink outlines, halftone patterns', imageUrl: '/assets/sty_comic.webp' },
    ]
  },
  {
    id: 'camera',
    title: '視角與鏡頭 (Camera & Perspective)',
    description: '攝影機擺放位置與鏡頭類型',
    options: [
      { id: 'cam_eye', label: '平視角', prompt: 'eye-level shot, straight on', imageUrl: '/assets/cam_eye.webp' },
      { id: 'cam_low', label: '仰角 (蟲鳴視角)', prompt: 'low angle shot, worm\'s-eye view, looking up', imageUrl: '/assets/cam_low.webp' },
      { id: 'cam_high', label: '俯角 (鳥瞰視角)', prompt: 'high angle shot, bird\'s-eye view, looking down', imageUrl: '/assets/cam_high.webp' },
      { id: 'cam_drone', label: '無人機空拍', prompt: 'drone view, top-down shot, aerial photography', imageUrl: '/assets/cam_drone.webp' },
      { id: 'cam_fisheye', label: '魚眼鏡頭', prompt: 'fisheye lens, distorted perspective', imageUrl: '/assets/cam_fisheye.webp' },
      { id: 'cam_macro', label: '微距鏡頭', prompt: 'macro shot, extreme close-up, shallow depth of field', imageUrl: '/assets/cam_macro.webp' },
      { id: 'cam_isometric', label: '等距視角', prompt: 'isometric view, 3D isometric rendering', imageUrl: '/assets/cam_isometric.webp' },
      { id: 'cam_dutch', label: '荷蘭角 (傾斜)', prompt: 'dutch angle, tilted camera, dynamic angle', imageUrl: '/assets/cam_dutch.webp' },
    ]
  },
  {
    id: 'lighting',
    title: '光影與照明 (Lighting)',
    description: '影響畫面的光線來源與質感',
    options: [
      { id: 'lit_cinematic', label: '電影光', prompt: 'cinematic lighting, dramatic lighting', imageUrl: '/assets/lit_cinematic.webp' },
      { id: 'lit_golden', label: '黃金時刻', prompt: 'golden hour, warm sunlight, sunset lighting', imageUrl: '/assets/lit_golden.webp' },
      { id: 'lit_studio', label: '棚拍光', prompt: 'studio lighting, professional lighting setup, softbox', imageUrl: '/assets/lit_studio.webp' },
      { id: 'lit_neon', label: '霓虹光', prompt: 'neon lighting, glowing lights, night city', imageUrl: '/assets/lit_neon.webp' },
      { id: 'lit_volumetric', label: '體積光 (耶穌光)', prompt: 'volumetric lighting, god rays, light beams', imageUrl: '/assets/lit_volumetric.webp' },
      { id: 'lit_dark', label: '暗黑氛圍光', prompt: 'dark and moody lighting, low key lighting, shadows', imageUrl: '/assets/lit_dark.webp' },
    ]
  },
  {
    id: 'color',
    title: '色彩與色調 (Color Palette)',
    description: '整體的色彩傾向',
    options: [
      { id: 'col_pastel', label: '柔和粉彩', prompt: 'pastel colors, soft color palette', imageUrl: '/assets/col_pastel.webp' },
      { id: 'col_monochrome', label: '單色 / 黑白', prompt: 'monochromatic, black and white, grayscale', imageUrl: '/assets/col_monochrome.webp' },
      { id: 'col_vibrant', label: '鮮豔生動', prompt: 'vibrant colors, highly saturated, colorful', imageUrl: '/assets/col_vibrant.webp' },
      { id: 'col_highcontrast', label: '高對比', prompt: 'high contrast, deep shadows and bright highlights', imageUrl: '/assets/col_highcontrast.webp' },
      { id: 'col_muted', label: '低飽和', prompt: 'muted colors, desaturated, faded', imageUrl: '/assets/col_muted.webp' },
    ]
  },
  {
    id: 'quality',
    title: '品質修飾詞 (Quality Modifiers)',
    description: '提升生成品質的常用咒語',
    options: [
      { id: 'qua_masterpiece', label: '傑作 / 最佳品質', prompt: 'masterpiece, best quality, ultra-detailed', imageUrl: '/assets/qua_masterpiece.webp' },
      { id: 'qua_8k', label: '8K 超高畫質', prompt: '8k resolution, highly detailed, sharp focus', imageUrl: '/assets/qua_8k.webp' },
      { id: 'qua_trending', label: 'ArtStation 趨勢', prompt: 'trending on ArtStation, award-winning', imageUrl: '/assets/qua_trending.webp' },
    ]
  }
];
