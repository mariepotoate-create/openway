import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Cette ligne est cruciale pour que les chemins soient corrects après le build
  base: './', 
})