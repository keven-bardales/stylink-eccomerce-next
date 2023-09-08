import PluginForms from '@tailwindcss/forms';
import { Config } from 'tailwindcss';

/**
 * Generate colors with:
 * @see https://uicolors.app/create
 */
const primaryColor = {};
const secondaryColor = {};

export default <Config>{
  content: ['./pages/**/*.{ts,jsx,tsx,mdx}', './components/**/*.{ts,jsx,tsx,mdx}', './app/**/*.{ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [PluginForms],
};
