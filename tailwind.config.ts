import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4"
        }
      }
    }
  },
  plugins: []
}

export default config
