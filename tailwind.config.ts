import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-red-to-blue':
          'linear-gradient(to bottom, rgba(48, 97, 140, 0.5) 50%, rgba(191, 94, 112, 0.7) 70%)',
      },
      colors: {
        black: {
          '333': '#333',
          '444': '#444',
          '555': '#555',
          '666': '#666',
          '777': '#777',
          '888': '#888',
          '999': '#999',
          AAA: '#aaa',
          BBB: '#bbb',
          CCC: '#ccc',
          DDD: '#ddd',
          EEE: '#eee',
          FFF: '#fff',
          '10': '#f1f1f1',
          '20': '#e3e3e3',
          '30': '#d9d9d9',
          '40': '#9C9C9C',
          '50': '#353F40',
          '60': '#343631',
        },
        purple: {
          '10': '#BABCD9',
        },
        pink: {
          '10': '#F2A7A0',
          '20': '#BF5E70',
        },
        yellow: {
          '10': '#F2BE22',
        },
        blue: {
          '10': '#30618C',
          '20': '#3450C2',
        },
        green: {
          '10': '#3F7E8C',
        },
        red: {
          '10': '#BF0426',
        },
      },
      boxShadow: {
        header: '0 1px 4px rgba(0, 0, 0, 0.2)',
        dialog: '2px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
};
export default config;
