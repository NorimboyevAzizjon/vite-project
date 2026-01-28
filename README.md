# Vite + React + TypeScript E-commerce

Bu loyiha Supabase bilan integratsiya qilingan e-commerce ilovasi.

## Supabase Sozlamalari

### 1. Supabase loyihasi yaratish
1. [supabase.com](https://supabase.com) ga kiring
2. Yangi loyiha yarating
3. Project Settings > API bo'limidan quyidagilarni oling:
   - Project URL
   - anon/public key

### 2. Environment Variables
`.env` faylini tahrirlang:
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Database sozlash
Supabase Dashboard > SQL Editor da `supabase-schema.sql` faylidagi SQL ni ishga tushiring.

### 4. Authentication sozlash
Supabase Dashboard > Authentication > Providers:
- Email provider yoqilgan bo'lishi kerak (default yoqilgan)

## Ishga tushirish

```bash
npm install
npm run dev
```

## Sahifalar

- `/` - Bosh sahifa (mahsulotlar ro'yxati)
- `/product/:id` - Mahsulot sahifasi
- `/cart` - Savatcha
- `/favorites` - Sevimlilar
- `/login` - Kirish/Ro'yxatdan o'tish
- `/admin` - Admin panel (faqat login qilganlar uchun)
- `/success` - Muvaffaqiyatli xarid sahifasi

## Texnologiyalar

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Auth + Database)
- React Router v6

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# vite-project
