import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import Sitemap from 'vite-plugin-sitemap';

const names = ['', 'shop', 'add-product', 'edit-product', 'shopping-cart'];
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
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
