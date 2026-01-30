import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import path from "path";

export default defineConfig(({ command, mode }) => {
  console.log("command是", command);
  console.log("mode是", mode);

  return defineConfig({
    plugins: [vue(), WindiCSS()],
    server: {
      // host: true,
      port: 3210,
      proxy: {
        "/api": {
          target: "http://ceshi13.dishait.cn",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 波浪线定义到src目录,类似@
        "~": path.resolve(__dirname, "src") // 波浪线定义到src目录,类似@
      }
    }
  });
});
