import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages URL: https://vinitshetty16.github.io/Portfolio-Website/
// Required so asset URLs resolve under the repo path, not site root.
export default defineConfig({
  base: '/Portfolio-Website/',
  plugins: [react()],
})
