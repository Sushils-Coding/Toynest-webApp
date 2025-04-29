/** @type {import('tailwindcss').Config} */
export default {
  // ...existing code...
  theme: {
    extend: {
      keyframes: {
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'drawLine': 'drawLine 0.6s ease-in-out forwards'
      }
    }
  }
  // ...existing code...
}