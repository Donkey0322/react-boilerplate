import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, `${process.cwd()}/env`, "");

  return {
    envDir: "env",
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      port: Number(env.VITE_APP_PORT),
    },
  };
});
