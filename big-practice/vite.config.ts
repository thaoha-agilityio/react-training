import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import Sitemap from 'vite-plugin-sitemap';
import viteImagemin from 'vite-plugin-imagemin';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const names = ['', 'shops', 'add-product', 'edit-product', 'product-detail', 'shopping-cart'];
const dynamicRoutes = names.map((name) => `/${name}`);
const envVariables = loadEnv('mock', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    tsconfigPaths(),
    Sitemap({ dynamicRoutes, hostname: envVariables.VITE_HOST_NAME }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
});
