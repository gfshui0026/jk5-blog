import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 文章 category 以數字記錄，對應下列分類名稱
export const JK5_CATEGORIES = {
  1: '思緒深呼吸',
  2: '聆聽貝殼',
  3: '書頁與微光',
  4: '甜甜奶糖',
} as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    image: image().optional(), // 文章配圖（放在 src/assets/posts/，例如 ../../assets/posts/xxx.jpg）
    summary: z.string().optional(), // 分享到 FB 時顯示的摘要（選填）
  }),
});

export const collections = { posts };