// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import swup from "@swup/astro";

import vue from "@astrojs/vue";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

export default defineConfig({
  base: "/themes/theme-fuwari-NanNan",
  build: {
    assets: "assets",
    format: "file",
  },
  experimental: {
    rustCompiler: true,
  },
  outDir: "./templates",
  integrations: [
    swup({
      theme: false,
      animationClass: "transition-swup-", // see https://swup.js.org/options/#animationselector
      // the default value `transition-` cause transition delay
      // when the Tailwind class `transition-all` is used
      containers: ["#swup-container", "#toc-container"],
      smoothScrolling: true,
      cache: false, // 禁用缓存，避免友链页面内容不完整
      preload: false, // 禁用预加载
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
      ignoreVisit: function(url) {
        // 禁用 Swup 对友链页面的处理
        return url.pathname === "/links" || url.pathname === "/links.html";
      },
    }),
    icon({
      include: {
        "preprocess: vitePreprocess(),": ["*"],
        "fa6-brands": ["*"],
        "fa6-regular": ["*"],
        "fa6-solid": ["*"],
      },
    }),
    vue(),
    svelte(),
  ],
  vite: {
    plugins: [
      tailwindcss({
        safelist: ["navbar-blur"],
      }),
      Icons({
        compiler: "vue3",
      }),
    ],
  },
});
