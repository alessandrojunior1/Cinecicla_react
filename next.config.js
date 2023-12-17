/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false, // Adicione qualquer módulo que você deseja ignorar no lado do servidor
        };
      }
  
      return config;
    },
  };