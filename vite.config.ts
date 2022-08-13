import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

	base: '/',
	build: {
		outDir: 'dist',
		assetsDir: 'static',
		assetsInlineLimit: 6000,
		chunkSizeWarningLimit: 1500,
	},
})
