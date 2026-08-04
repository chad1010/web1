import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 상대 경로 빌드: GitHub Pages의 하위 경로(/web1/insidecreator/)에서도 동작한다.
  base: './',
})
