/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/my-profile',
    generateBuildId: async () => {
        return `${Date.now()}`; // Unique build ID to prevent stale cache
      },
      experimental: {
        incrementalCacheHandlerPath: false, // Disables cache persistence
      },
      outputFileTracing: false, // Avoids caching dependencies
      images: {
        unoptimized: true, // Ensures images are not cached
      },
      async headers() {
        return [
          {
            source: "/(.*)",
            headers: [
              { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, proxy-revalidate" },
              { key: "Pragma", value: "no-cache" },
              { key: "Expires", value: "0" },
            ],
          },
        ];
      },
};
export default nextConfig;
