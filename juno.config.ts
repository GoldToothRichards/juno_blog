import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    id: "ojmfj-uyaaa-aaaal-ajcma-cai",
    source: "dist",
    storage: {
      headers: [
        {
          source: "/",
          headers: [["Cache-Control", "public,max-age=0,must-revalidate"]]
        },
        {
          source: "fonts/*",
          headers: [["Cache-Control", "max-age=31536000"]]
        },
        {
          source: "fontawesome/**/*",
          headers: [["Cache-Control", "max-age=31536000"]]
        },
        {
          source: "images/*",
          headers: [["Cache-Control", "max-age=31536000"]]
        },
        {
          source: "**/*.{jpg,jpeg,png,gif,webp,svg,ico}",
          headers: [["Cache-Control", "max-age=31536000"]]
        },
        {
          source: "**/*.{woff,woff2,ttf,otf}",
          headers: [["Cache-Control", "max-age=31536000"]]
        },
        {
          source: "documents/*",
          headers: [["Cache-Control", "max-age=0,must-revalidate"]]
        }
      ]
    }
  },
});
