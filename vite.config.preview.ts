import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src')
    }
  },
});
