import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Silence Dart Sass deprecation warnings for the existing @import-based styles.
      scss: {silenceDeprecations: ['import', 'global-builtin']},
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
});
