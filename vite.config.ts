import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" }
    }),
    nitro({
      preset: process.env.VERCEL ? "vercel" : "node-server",
      rollupConfig: {
        onwarn(warning, rollupWarn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE" || warning.message.includes("use client")) {
            return;
          }
          rollupWarn(warning);
        }
      }
    }),
    react()
  ],
  resolve: {
    alias: {
       "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message.includes("use client") || warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  }
});
