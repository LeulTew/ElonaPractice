import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    alias: {
      '@': path.resolve(__dirname, './')
    },
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**', '**/tests/e2e/**'],
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://ykskwxkgcapkflfpgiww.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrc2t3eGtnY2Fwa2ZsZnBnaXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NzczODAsImV4cCI6MjA3OTU1MzM4MH0.Ek76zbUatULhGLESVatziN3JkUsVD3EEMN95sooByes'
    }
  },
})
