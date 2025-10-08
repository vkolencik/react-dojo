import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    jsx: true,
    setupFiles: './src/setupTests.js'
  },
})
