import PluginForms from '@tailwindcss/forms';
import { Config } from 'tailwindcss';

/**
 * Generate colors with:
 * @see https://uicolors.app/create
 */
const primary_black = {
  '50': '#f6f6f6',
  '100': '#F5F5F5',
  '200': '#d1d1d1',
  '300': '#b0b0b0',
  '400': '#888888',
  '500': '#6d6d6d',
  '600': '#5d5d5d',
  '700': '#4f4f4f',
  '800': '#454545',
  '900': '#3d3d3d',
  '950': '#000000',
};

const secondary_white = {
  '50': '#ffffff',
  '100': '#efefef',
  '200': '#dcdcdc',
  '300': '#bdbdbd',
  '400': '#989898',
  '500': '#7c7c7c',
  '600': '#656565',
  '700': '#525252',
  '800': '#464646',
  '900': '#3d3d3d',
  '950': '#292929',
};

export default <Config>{
  content: ['./pages/**/*.{ts,jsx,tsx,mdx}', './components/**/*.{ts,jsx,tsx,mdx}', './app/**/*.{ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      backgroundColor: {
        skin: {
          main: 'var(--bg-color-body)',
          secondary: 'var(--bg-color-secondary)',
          home_cards: 'var(--bg-home-cards)',
        },
      },
      borderColor: {
        skin: {
          main: 'var(--bg-color-secondary)',
          secondary: 'var(--bg-color-body)',
          muted: 'var(--color-text-muted)',
        },
      },
      colors: {
        'main-black': {
          ...primary_black,
          main: primary_black['950'],
          darker: primary_black['700'],
        },
        'secondary-white': {
          ...secondary_white,
          main: secondary_white['50'],
          darker: secondary_white['200'],
        },
      },
    },
  },
  plugins: [PluginForms],
};
