import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwinf=dcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(
    {
      jsxImportantSource: '@emotion/react'
    }
  ), tailwindcss()],
})
