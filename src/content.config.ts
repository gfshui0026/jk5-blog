import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 嚴格定義你的 JK5 五大內容主題
export const JK5_CATEGORIES = [
  '思緒整理室',
  '呼嚕觀察日記',
  '人生系統化實驗',
  '書頁與微光',
  '下線充電站',
] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(JK5_CATEGORIES),
    summary: z.string().optional(), // 分享到 FB 時顯示的摘要（選填）
  }),
});

export const collections = { posts };