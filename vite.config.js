import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                // about: resolve(__dirname, "about.html"),
                product: resolve(__dirname, "product.html"),
                productdetail: resolve(__dirname, "product-detail.html"),
                cart: resolve(__dirname, "cart.html"),
            },
        },
    },
});
