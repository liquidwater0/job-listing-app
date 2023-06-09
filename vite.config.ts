import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/job-listing-app/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});