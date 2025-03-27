import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://gopi374.github.io/karan-mehndi-art/', // 👈 Set your repo name here
});
