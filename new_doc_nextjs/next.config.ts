import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Отключаем ошибки ESLint во время next build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Сборка в standalone-режиме (генерирует server.js и все зависимости)
  output: "standalone",

  // Ваши остальные опции, например:
  // reactStrictMode: true,
  // compiler: { emotion: true },
  // experimental: { appDir: true },
};

export default nextConfig;
