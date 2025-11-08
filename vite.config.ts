import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts'],
      name: 'json2dts',
    },
  },
  resolve: {
    alias: {
      '~': __dirname,
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
    }
  }
});
