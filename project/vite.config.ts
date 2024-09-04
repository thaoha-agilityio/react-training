import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import Sitemap from "vite-plugin-sitemap";

const envVariables = loadEnv("mock", process.cwd(), "");

const names = ["", "tasks"];
const dynamicRoutes = names.map((name) => `/${name}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Sitemap({ dynamicRoutes, hostname: envVariables.VITE_API_URL }),
  ],

  define: {
    "process.env.VITE_API_URL": JSON.stringify(envVariables.VITE_API_URL),
  },
});
