import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          'preset-default',
          'removeViewBox',
          'sortAttrs',
        ],
      },
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      jpg: {
        quality: 85,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
      avif: {
        lossless: false,
        quality: 75,
      },
    }),
    Sitemap({
      hostname: 'https://voltera.cloud',
      dynamicRoutes: [
        '/shared-hosting',
        '/cloud-hosting',
        '/reseller-hosting',
        '/cloud-vps',
        '/dedicated-server',
        '/colocation',
        '/domain',
        '/contact',
        '/legal',
        '/promo',
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-framer': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
        },
      },
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
})
