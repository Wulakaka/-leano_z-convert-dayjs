import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.ts"),
      name: "ConvertDayjs",
      // the proper extensions will be added
      fileName: "convert-dayjs",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/^dayjs.*/],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          dayjs: "dayjs",
        },
      },
    },
  },
});
