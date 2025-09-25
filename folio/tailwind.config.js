const fs = require('fs');

// DaisyUI v5 ships themes as ESM; parse the corporate defaults from the bundled object
const themeExport = fs
  .readFileSync(require.resolve('daisyui/theme/object.js'), 'utf8')
  .replace(/^export default\s*/, '')
  .trim();

const themes = JSON.parse(themeExport.endsWith(';') ? themeExport.slice(0, -1) : themeExport);
const corporateTheme = themes.corporate ?? {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        corporate: {
          ...corporateTheme,
          '--color-primary': '#0891B2',
          '--color-primary-content': '#ffffff',
          '--color-accent': '#22d3ee',
          primary: '#0891B2',
          'primary-content': '#ffffff',
          accent: '#22d3ee',
        },
      },
    ],
    darkTheme: 'corporate',
  },
};
