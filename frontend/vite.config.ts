import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteSitemap from "vite-plugin-sitemap";
import reactsvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		reactsvgr(),
		react(),
		tailwindcss(),
		ViteImageOptimizer({
			webp: { quality: 75 },
		}),
		ViteSitemap({
			hostname: "https://kretostan.com",
			outDir: "dist",
		}),
	],
	server: {
		proxy: {
			"/api/portfolio/": {
				target: "http://backend:3001",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/portfolio\/?/, "/"),
			},
		},
	},
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
				},
			},
		},
	},
});
