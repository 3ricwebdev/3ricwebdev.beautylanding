// vite.config.ts
import Inspect from 'vite-plugin-inspect'

export default {
  build: {
    outDir: './build'
  },
  plugins: [
    Inspect()
  ],
}