import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
                about: resolve(__dirname, "src/about.html"),
                product: resolve(__dirname, "src/product.html"),
                productdetail: resolve(__dirname, "src/product-detail.html"),
                cart: resolve(__dirname, "src/cart.html"),
            },
        },
    },
});
