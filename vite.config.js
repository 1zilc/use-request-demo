import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'TAURI_'],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  define: {
    __BUILD_TIME__: JSON.stringify(Date.now()), // 构建时间
  },
});
