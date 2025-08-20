import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://64.227.189.27",
        changeOrigin: true,
        secure: false, // ignore bad SSL in local dev
        rewrite: (path) => path.replace(/^\/api/, "/wallet/api/v1"),
      },
    },
  },
});
