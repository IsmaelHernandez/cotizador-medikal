import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const svgProperties = [
  'rdf:rdf',
  'sodipodi:namedview',
  'cc:work',
  'dc:title',
  'dc:type',
  'dc:format',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => svgProperties.includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
