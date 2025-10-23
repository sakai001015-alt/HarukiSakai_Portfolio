import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },                             
  base: process.env.GITHUB_PAGES ? '/HarukiSakai_Portfolio/' : './', 
  //base: '/HarukiSakai_Portfolio/',
  //base: '/',
  plugins: [react()],
})
