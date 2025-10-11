import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // Оптимізація зображень
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Оптимізація продакшн бандлу
  swcMinify: true,
  
  // Оптимізація шрифтів
  optimizeFonts: true,
  
  // Experimental features для кращого Performance
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  
  // Перевірка TypeScript і ESLint тільки в dev mode
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);
