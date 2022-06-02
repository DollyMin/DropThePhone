export const languages = ['en', 'ko'] as const;
export type Languages = typeof languages[number]; // 'en' | 'ko'
