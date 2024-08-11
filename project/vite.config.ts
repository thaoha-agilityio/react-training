import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const envVariables = loadEnv("mock", process.cwd(), "");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  define: {
    "process.env.VITE_API_URL": JSON.stringify(envVariables.VITE_API_URL),
  },
});
