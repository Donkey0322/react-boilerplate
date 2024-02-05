import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, `${process.cwd()}/env`, "");

  return {
    envDir: "env",
    plugins: [react()],
    server: {
      port: Number(env.VITE_APP_PORT),
    },
  };
})
