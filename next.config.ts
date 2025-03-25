/** @type {import('next').NextConfig} */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"], // Permite carregar imagens da TMDb
  },
};

export default nextConfig;
