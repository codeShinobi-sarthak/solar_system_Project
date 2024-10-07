import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    root: "src/",
    publicDir: "../static/",
    base: "./",
    plugins: [
        react(), // Enable React support
        // eslint({ include: ['src/**/*.js', 'src/**/*.jsx'] }) // Temporarily comment this out
    ],
    build: {
        outDir: "../dist", // Adjust this path as needed
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
});
