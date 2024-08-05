module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#e4e0e1',
          secondary: '#ef9fbc',
          accent: '#25272c',
          neutral: '#2ba0a3',
          'base-100': '#fefefe',
          'base-200': '#ebebeb',
          'base-300': '#e3e3e3',
          'base-content': '#25272c',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
