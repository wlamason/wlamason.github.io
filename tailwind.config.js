module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html', './src/**/*.js'],
    options: {
      keyframes: true,
    }
  },
  theme: {
    fontFamily: {
     'hack': ['Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace', 'serif'],
    },
    extend: {
      colors: {
        'bold-pink': '#FF2E88',
      }
    }
  }
}
