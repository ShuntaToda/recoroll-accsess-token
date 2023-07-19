import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        host: true, // hostを決める必要がある
        hmr: {
            host: "localhost", //windows & wsl2の環境だとhostを指定する必要がある
        },
    },
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.jsx",
                "resources/scss/app.scss",
            ],
            refresh: true,
        }),
        react(),
    ],
});
