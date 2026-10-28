import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Courier Prime",
      cssVariable: "--font-courier-prime",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/courier_prime.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
