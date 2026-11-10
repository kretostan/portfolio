import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import ViteSitemap from "vite-plugin-sitemap";
import reactsvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());

	if (command === "serve" && !env.VITE_API_URL)
		throw new Error("VITE_API_URL is required for the development proxy");

	return {
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
				"/api": {
					target: env.VITE_API_URL,
					changeOrigin: true,
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
	};
});
