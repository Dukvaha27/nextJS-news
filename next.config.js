module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru','en' ],
    defaultLocale: 'ru',
    localeDetection: false,
  },
  trailingSlash: false,
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp','image/webp','.phg','.jpg'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['assets.example.com'],
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

