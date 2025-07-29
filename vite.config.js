import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg}"],
      },
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "A sample React application with PWA support",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#228be6",
        icons: [
          {
            src: "128_js_react js_logo_react_react native_icon.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "512_js_react js_logo_react_react native_icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshots/728x410.jpg",
            sizes: "728x410",
            type: "image/jpg",
            title: "Main Screen",
            form_factor: "wide",
            description:
              "The main screen of the application showcasing its features.",
          },
          {
            src: "screenshots/736x1309.jpg",
            sizes: "736x1309",
            type: "image/jpg",
            title: "Main Screen",
            form_factor: "narrow",
            description:
              "The main screen of the application showcasing its features.",
          },
        ],
      },
    }),
  ],
});
