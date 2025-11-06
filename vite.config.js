import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow overriding base URL via env (useful for GH Pages vs Netlify/Vercel)
// - For GitHub Pages set VITE_BASE='/Mini-Project1-React/' in the build environment (or set GITHUB_PAGES=1)
// - For Netlify/Vercel leave VITE_BASE unset (defaults to '/')
const base = process.env.VITE_BASE || (process.env.GITHUB_PAGES ? '/Mini-Project1-React/' : '/')

export default defineConfig({
  plugins: [react()],
  base,
})
